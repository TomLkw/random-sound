"""
gen-task2-audio-to-r2.py
读取 csv/ielts-task2-no-note.csv，使用 Azure TTS 生成单词音频，并直接上传到 Cloudflare R2。

默认处理章节：
  task2-basic, task2-argument, task2-topic

示例：
  .venv/bin/python gen-task2-audio-to-r2.py
  .venv/bin/python gen-task2-audio-to-r2.py --chapter task2-basic
  .venv/bin/python gen-task2-audio-to-r2.py --dry-run

断点续跑：
  已上传成功的 R2 key 会记录在 upload-to-r2/r2_task2_success.log。
  已生成的本地 mp3 会保留在 local-audios/task2，重跑时不会重复合成。
"""

import argparse
import csv
import html
import logging
import os
import time
from pathlib import Path

import azure.cognitiveservices.speech as speechsdk
import boto3
from botocore.config import Config

# ── 配置区 ────────────────────────────────────────────────────────────────────
AZURE_SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY", "cc9095be4b154dc59067c6b4efe568e5")
AZURE_REGION = os.getenv("AZURE_REGION", "eastasia")
VOICE_NAME = os.getenv("AZURE_VOICE_NAME", "en-US-JennyNeural")
SPEECH_RATE = os.getenv("SPEECH_RATE", "1.0")

R2_ACCOUNT_ID = os.getenv("R2_ACCOUNT_ID", "5d6465c39769dbba52037ae93dddea27")
R2_ACCESS_KEY_ID = os.getenv("R2_ACCESS_KEY_ID", "73aece21c25ad9ffee2b10354353a064")
R2_SECRET_ACCESS_KEY = os.getenv(
    "R2_SECRET_ACCESS_KEY",
    "29038283da97449fc31434ea08019fb889106bb1f98ef065bd34c3570e63e8cd",
)
R2_BUCKET_NAME = os.getenv("R2_BUCKET_NAME", "hear-audio")

BASE_DIR = Path(__file__).resolve().parent
CSV_PATH = BASE_DIR / "csv" / "ielts-task2-no-note.csv"
LOCAL_AUDIO_DIR = BASE_DIR / "local-audios" / "task2"
LOG_DIR = BASE_DIR / "upload-to-r2"
SUCCESS_LOG = LOG_DIR / "r2_task2_success.log"
FAILED_LOG = LOG_DIR / "r2_task2_failed.log"

DEFAULT_CHAPTERS = ["task2-basic", "task2-argument", "task2-topic"]
RETRY_TIMES = 3
RETRY_DELAY = 2
# ─────────────────────────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="生成 Task 2 单词音频并上传到 R2。")
    parser.add_argument(
        "--csv",
        default=str(CSV_PATH),
        help="CSV 文件路径，默认 csv/ielts-task2-no-note.csv。",
    )
    parser.add_argument(
        "--chapter",
        action="append",
        choices=DEFAULT_CHAPTERS,
        help="只处理指定章节；可重复传入。不传则处理全部 Task 2 章节。",
    )
    parser.add_argument(
        "--prefix",
        default="",
        help="R2 对象名前缀。默认根目录，需与前端音频路径保持一致。",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="只展示将处理的单词，不生成或上传。",
    )
    parser.add_argument(
        "--no-skip",
        action="store_true",
        help="忽略成功日志，强制重新上传。",
    )
    return parser.parse_args()


def normalize_prefix(prefix: str) -> str:
    prefix = prefix.strip().lstrip("/")
    if prefix and not prefix.endswith("/"):
        prefix += "/"
    return prefix


def build_audio_filename(word: str) -> str:
    return word.replace("/", "-") + ".mp3"


def _load_log(path: Path) -> set[str]:
    if not path.exists():
        return set()
    with open(path, "r", encoding="utf-8") as f:
        return {line.strip() for line in f if line.strip() and not line.startswith("#")}


def _append_log(path: Path, value: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "a", encoding="utf-8") as f:
        f.write(value + "\n")


def load_words(csv_path: Path, chapters: set[str]) -> list[dict[str, str]]:
    rows: list[dict[str, str]] = []
    seen_words: set[str] = set()

    with open(csv_path, "r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            chapter = (row.get("chapter") or "").strip()
            word = (row.get("word") or "").strip()
            translation = (row.get("translation") or "").strip()
            if not chapter or not word or chapter not in chapters:
                continue
            if word in seen_words:
                continue
            seen_words.add(word)
            rows.append({"chapter": chapter, "word": word, "translation": translation})

    return rows


def build_speech_config() -> speechsdk.SpeechConfig:
    speech_config = speechsdk.SpeechConfig(
        subscription=AZURE_SPEECH_KEY,
        region=AZURE_REGION,
    )
    speech_config.speech_synthesis_voice_name = VOICE_NAME
    return speech_config


def synthesize_to_file(speech_config: speechsdk.SpeechConfig, word: str, local_path: Path) -> tuple[bool, str]:
    LOCAL_AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    audio_config = speechsdk.audio.AudioOutputConfig(filename=str(local_path))
    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config,
        audio_config=audio_config,
    )

    escaped_word = html.escape(word, quote=True)
    ssml = f"""<speak version="1.0" xml:lang="en-US">
  <voice name="{VOICE_NAME}">
    <prosody rate="{SPEECH_RATE}">{escaped_word}</prosody>
  </voice>
</speak>"""

    result = synthesizer.speak_ssml_async(ssml).get()
    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        return True, "ok"

    if result.reason == speechsdk.ResultReason.Canceled:
        details = speechsdk.CancellationDetails(result)
        return False, f"{details.reason}: {details.error_details}"

    return False, str(result.reason)


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
    csv_path = Path(args.csv).expanduser().resolve()
    chapters = set(args.chapter or DEFAULT_CHAPTERS)
    prefix = normalize_prefix(args.prefix)

    words = load_words(csv_path, chapters)
    done_success = set() if args.no_skip else _load_log(SUCCESS_LOG)
    pending = []

    for item in words:
        filename = build_audio_filename(item["word"])
        r2_key = prefix + filename
        if r2_key in done_success:
            continue
        pending.append((item, filename, r2_key))

    log.info("CSV: %s", csv_path)
    log.info("章节: %s", ", ".join(sorted(chapters)))
    log.info("R2 bucket: %s", R2_BUCKET_NAME)
    log.info("R2 prefix: %s", prefix or "(根目录)")
    log.info("去重后共 %d 个单词，已完成 %d 个，本次处理 %d 个",
             len(words), len(words) - len(pending), len(pending))

    if args.dry_run:
        for item, _, r2_key in pending[:20]:
            log.info("[dry-run] %s -> %s", item["word"], r2_key)
        if len(pending) > 20:
            log.info("[dry-run] ... 还有 %d 个", len(pending) - 20)
        return

    speech_config = build_speech_config()
    r2 = build_r2_client()
    success_count = failed_count = 0

    for idx, (item, filename, r2_key) in enumerate(pending, 1):
        word = item["word"]
        local_path = LOCAL_AUDIO_DIR / filename
        log.info("[%d/%d] %s -> %s", idx, len(pending), word, r2_key)

        if local_path.exists() and local_path.stat().st_size == 0:
            local_path.unlink()

        if not local_path.exists():
            synth_ok = False
            for attempt in range(1, RETRY_TIMES + 1):
                try:
                    synth_ok, synth_error = synthesize_to_file(speech_config, word, local_path)
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
                log.error("  ❌ 合成彻底失败: %s", word)
                _append_log(FAILED_LOG, f"synthesize\t{word}")
                failed_count += 1
                continue
        else:
            log.info("  已有本地音频，跳过合成")

        upload_ok = False
        for attempt in range(1, RETRY_TIMES + 1):
            try:
                upload_to_r2(r2, local_path, r2_key)
                upload_ok = True
                break
            except Exception as e:
                log.warning("  上传失败（第%d次）: %s", attempt, e)
                if attempt < RETRY_TIMES:
                    time.sleep(RETRY_DELAY)

        if upload_ok:
            log.info("  ✅ 上传成功: %s", r2_key)
            _append_log(SUCCESS_LOG, r2_key)
            success_count += 1
        else:
            log.error("  ❌ 上传彻底失败: %s", word)
            _append_log(FAILED_LOG, f"upload\t{word}")
            failed_count += 1

    log.info("─" * 50)
    log.info("完成  ✅ 成功: %d  ❌ 失败: %d", success_count, failed_count)


if __name__ == "__main__":
    main()
