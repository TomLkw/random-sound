"""
Generate current hard-mode number dictation audio and upload it to Cloudflare R2.

Examples:
  .venv/bin/python gen-number-hard-audio-to-r2.py --dry-run
  .venv/bin/python gen-number-hard-audio-to-r2.py

The source of truth is the hard-mode numberGroups block in index.html.
Generated MP3s are kept in local-audios/numbers-hard.
Uploaded R2 keys are logged in upload-to-r2/r2_num_hard_success.log.
"""

import argparse
import html
import logging
import os
import re
import time
from pathlib import Path

import boto3
import requests
from botocore.config import Config

AZURE_SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY", "cc9095be4b154dc59067c6b4efe568e5")
AZURE_REGION = os.getenv("AZURE_REGION", "eastasia")
VOICE_NAME = os.getenv("AZURE_VOICE_NAME", "en-US-JennyNeural")
SPEECH_RATE = os.getenv("SPEECH_RATE", "-25%")

R2_ACCOUNT_ID = os.getenv("R2_ACCOUNT_ID", "5d6465c39769dbba52037ae93dddea27")
R2_ACCESS_KEY_ID = os.getenv("R2_ACCESS_KEY_ID", "73aece21c25ad9ffee2b10354353a064")
R2_SECRET_ACCESS_KEY = os.getenv(
    "R2_SECRET_ACCESS_KEY",
    "29038283da97449fc31434ea08019fb889106bb1f98ef065bd34c3570e63e8cd",
)
R2_BUCKET_NAME = os.getenv("R2_BUCKET_NAME", "hear-audio")

BASE_DIR = Path(__file__).resolve().parent
INDEX_HTML = BASE_DIR / "index.html"
LOCAL_AUDIO_DIR = BASE_DIR / "local-audios" / "numbers-hard"
LOG_DIR = BASE_DIR / "upload-to-r2"
SUCCESS_LOG = LOG_DIR / "r2_num_hard_success.log"
FAILED_LOG = LOG_DIR / "r2_num_hard_failed.log"

RETRY_TIMES = 3
RETRY_DELAY = 2
TTS_TIMEOUT = 30

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="生成困难模式数字听力音频并上传到 R2。")
    parser.add_argument("--dry-run", action="store_true", help="只展示当前困难模式数字，不生成或上传。")
    parser.add_argument("--no-skip", action="store_true", help="忽略成功日志，强制重新上传。")
    return parser.parse_args()


def extract_hard_numbers() -> list[tuple[str, str]]:
    source = INDEX_HTML.read_text(encoding="utf-8")
    start = source.index("// 困难版：7-11位数字")
    end = source.index("$('#current-chapter-title').text('数字听力练习 (困难版 7-11位)')", start)
    block = source[start:end]
    pairs = re.findall(r"\{ en: '([^']+)', zh: '[^']+', speech: '([^']+)' \}", block)
    if not pairs:
        raise RuntimeError("未能从 index.html 提取困难模式数字。")
    return pairs


def build_audio_filename(number: str) -> str:
    return number.replace("/", "-") + ".mp3"


def _load_log(path: Path) -> set[str]:
    if not path.exists():
        return set()
    with open(path, "r", encoding="utf-8") as f:
        return {line.strip() for line in f if line.strip() and not line.startswith("#")}


def _append_log(path: Path, value: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "a", encoding="utf-8") as f:
        f.write(value + "\n")


def synthesize_to_file(spoken_text: str, local_path: Path) -> tuple[bool, str]:
    LOCAL_AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    escaped_text = html.escape(spoken_text, quote=True)
    ssml = f"""<speak version="1.0" xml:lang="en-US">
  <voice name="{VOICE_NAME}">
    <prosody rate="{SPEECH_RATE}">{escaped_text}</prosody>
  </voice>
</speak>"""

    url = f"https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1"
    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_SPEECH_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-32kbitrate-mono-mp3",
        "User-Agent": "radom-sound-number-hard-audio",
    }
    response = requests.post(
        url,
        data=ssml.encode("utf-8"),
        headers=headers,
        timeout=TTS_TIMEOUT,
    )
    if response.status_code != 200:
        return False, f"HTTP {response.status_code}: {response.text[:200]}"

    local_path.write_bytes(response.content)
    return True, "ok"


def build_r2_client():
    endpoint = f"https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
    return boto3.client(
        "s3",
        endpoint_url=endpoint,
        aws_access_key_id=R2_ACCESS_KEY_ID,
        aws_secret_access_key=R2_SECRET_ACCESS_KEY,
        config=Config(signature_version="s3v4"),
        region_name="auto",
    )


def upload_to_r2(client, local_path: Path, r2_key: str) -> None:
    with open(local_path, "rb") as f:
        client.put_object(
            Bucket=R2_BUCKET_NAME,
            Key=r2_key,
            Body=f,
            ContentType="audio/mpeg",
        )


def main() -> None:
    args = parse_args()
    number_items = extract_hard_numbers()
    done_success = set() if args.no_skip else _load_log(SUCCESS_LOG)

    pending = []
    for number, spoken_text in number_items:
        filename = build_audio_filename(number)
        if filename in done_success:
            continue
        pending.append((number, spoken_text, filename))

    log.info(
        "困难模式数字音频共 %d 条，已完成 %d 条，本次处理 %d 条",
        len(number_items),
        len(number_items) - len(pending),
        len(pending),
    )
    log.info("R2 bucket: %s", R2_BUCKET_NAME)
    log.info("R2 prefix: (根目录)")

    if args.dry_run:
        for number, spoken_text, filename in pending:
            log.info("[dry-run] %s (%s) -> %s", number, spoken_text, filename)
        return

    r2 = build_r2_client()
    success_count = failed_count = 0

    for idx, (number, spoken_text, filename) in enumerate(pending, 1):
        local_path = LOCAL_AUDIO_DIR / filename
        log.info("[%d/%d] %s (%s) -> %s", idx, len(pending), number, spoken_text, filename)

        if local_path.exists() and local_path.stat().st_size == 0:
            local_path.unlink()

        if not local_path.exists():
            synth_ok = False
            for attempt in range(1, RETRY_TIMES + 1):
                try:
                    synth_ok, synth_error = synthesize_to_file(spoken_text, local_path)
                    if synth_ok:
                        break
                    log.warning("  合成失败（第%d次）: %s", attempt, synth_error)
                except Exception as e:
                    log.warning("  合成异常（第%d次）: %s", attempt, e)
                if attempt < RETRY_TIMES:
                    time.sleep(RETRY_DELAY)

            if not synth_ok:
                if local_path.exists() and local_path.stat().st_size == 0:
                    local_path.unlink()
                log.error("  ❌ 合成彻底失败: %s", number)
                _append_log(FAILED_LOG, f"synthesize\t{filename}")
                failed_count += 1
                continue
        else:
            log.info("  已有本地音频，跳过合成")

        upload_ok = False
        for attempt in range(1, RETRY_TIMES + 1):
            try:
                upload_to_r2(r2, local_path, filename)
                upload_ok = True
                break
            except Exception as e:
                log.warning("  上传失败（第%d次）: %s", attempt, e)
                if attempt < RETRY_TIMES:
                    time.sleep(RETRY_DELAY)

        if upload_ok:
            log.info("  ✅ 上传成功: %s", filename)
            _append_log(SUCCESS_LOG, filename)
            success_count += 1
        else:
            log.error("  ❌ 上传彻底失败: %s", filename)
            _append_log(FAILED_LOG, f"upload\t{filename}")
            failed_count += 1

    log.info("完成  ✅ 成功: %d  ❌ 失败: %d", success_count, failed_count)


if __name__ == "__main__":
    main()
