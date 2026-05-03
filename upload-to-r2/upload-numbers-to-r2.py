"""
upload-numbers-to-r2.py
从 Supabase word-audios 下载数字听力音频，上传到 Cloudflare R2。

日志文件（同目录）：
  r2_num_success.log  — 成功上传（每行一个数字）
  r2_num_failed.log   — 下载/上传失败
  r2_num_missing.log  — Supabase 上不存在（404）

断点续传：直接重跑即可，success/missing 自动跳过。
"""

import logging
import os
import time
from pathlib import Path

import boto3
import requests
from botocore.config import Config

# ── 配置区 ────────────────────────────────────────────────────────────────────
SUPABASE_URL    = os.getenv("SUPABASE_URL",    "https://elckemvmphbjjlpzgoqy.supabase.co")
SUPABASE_BUCKET = "word-audios"

R2_ACCOUNT_ID        = os.getenv("R2_ACCOUNT_ID",        "5d6465c39769dbba52037ae93dddea27")
R2_ACCESS_KEY_ID     = os.getenv("R2_ACCESS_KEY_ID",     "73aece21c25ad9ffee2b10354353a064")
R2_SECRET_ACCESS_KEY = os.getenv("R2_SECRET_ACCESS_KEY", "29038283da97449fc31434ea08019fb889106bb1f98ef065bd34c3570e63e8cd")
R2_BUCKET_NAME       = os.getenv("R2_BUCKET_NAME",       "hear-audio")

LOG_DIR      = Path(__file__).resolve().parent
SUCCESS_LOG  = LOG_DIR / "r2_num_success.log"
FAILED_LOG   = LOG_DIR / "r2_num_failed.log"
MISSING_LOG  = LOG_DIR / "r2_num_missing.log"

DOWNLOAD_TIMEOUT = 15
RETRY_TIMES      = 3
RETRY_DELAY      = 2
# ─────────────────────────────────────────────────────────────────────────────

# 与 gen-number-sound.py 保持完全一致
NUMBER_GROUPS = {
    # easy
    "284":    "two, eight, four",
    "591":    "five, nine, one",
    "730":    "seven, three, or",
    "1163":   "double one, six, three",
    "4829":   "four, eight, two, nine",
    "9051":   "nine, or, five, one",
    "22748":  "double two, seven, four, eight",
    "69130":  "six, nine, one, three, or",
    "11582":  "double one, five, eight, two",
    "558394": "double five, eight, three, nine, four",
    "172849": "one, seven, two, eight, four, nine",
    "770516": "double seven, or, five, one, six",
    "395":    "three, nine, five",
    "6182":   "six, one, eight, two",
    "04739":  "or, four, seven, three, nine",
    "556201": "double five, six, two, or, one",
    "817":    "eight, one, seven",
    "0493":   "or, four, nine, three",
    "44829":  "double four, eight, two, nine",
    "891037": "eight, nine, one, or, three, seven",
    # hard
    "2324681":  "two, three, two, four, six, eight, one",
    "6373579":  "six, three, seven, three, five, seven, nine",
    "8118047":  "eight, double one, eight, or, four, seven",
    "5566789":  "double five, double six, seven, eight, nine",
    "90012345": "nine, double or, one, two, three, four, five",
    "44778912": "double four, double seven, eight, nine, one, two",
    "12304567": "one, two, three, or, four, five, six, seven",
    "77889034": "double seven, double eight, nine, or, three, four",
    "7394888":  "seven, three, nine, four, triple eight",
    "9988176":  "double nine, double eight, one, seven, six",
    "2211934":  "double two, double one, nine, three, four",
    "6659222":  "double six, five, nine, triple two",
    "1129555":  "double one, two, nine, triple five",
    "8895777":  "double eight, nine, five, triple seven",
    "55439210": "double five, four, three, nine, two, one, or",
    "7765111":  "double seven, six, five, triple one",
    "33210987": "double three, two, one, or, nine, eight, seven",
    "9908444":  "double nine, or, eight, triple four",
    "4432999":  "double four, three, two, triple nine",
    "66789012": "double six, seven, eight, nine, or, one, two",
}

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)


# ── 日志工具 ──────────────────────────────────────────────────────────────────

def _load_log(path: Path) -> set[str]:
    if not path.exists():
        return set()
    with open(path, "r", encoding="utf-8") as f:
        return {line.strip() for line in f if line.strip() and not line.startswith("#")}


def _append_log(path: Path, value: str) -> None:
    with open(path, "a", encoding="utf-8") as f:
        f.write(value + "\n")


# ── Supabase Storage 下载 ─────────────────────────────────────────────────────

def download_from_supabase(filename: str) -> bytes | None:
    """返回 bytes（成功）、None（404）；网络错误抛出异常。"""
    url = f"{SUPABASE_URL}/storage/v1/object/public/{SUPABASE_BUCKET}/{filename}"
    resp = requests.get(url, timeout=DOWNLOAD_TIMEOUT)
    if resp.status_code == 404:
        return None
    resp.raise_for_status()
    return resp.content


# ── Cloudflare R2 上传 ────────────────────────────────────────────────────────

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


def upload_to_r2(client, filename: str, data: bytes) -> None:
    client.put_object(
        Bucket=R2_BUCKET_NAME,
        Key=filename,
        Body=data,
        ContentType="audio/mpeg",
    )


# ── 主流程 ────────────────────────────────────────────────────────────────────

def main() -> None:
    all_numbers = list(NUMBER_GROUPS.keys())
    log.info("数字音频共 %d 条", len(all_numbers))

    done_success = _load_log(SUCCESS_LOG)
    done_missing  = _load_log(MISSING_LOG)
    skip_set      = done_success | done_missing

    pending = [n for n in all_numbers if n not in skip_set]
    skipped = [n for n in all_numbers if n in skip_set]
    if skipped:
        log.info("跳过 %d 条（已完成）: %s", len(skipped), skipped)
    log.info("本次处理 %d 条", len(pending))

    r2 = build_r2_client()
    success_count = failed_count = missing_count = 0

    for idx, number in enumerate(pending, 1):
        filename = f"{number}.mp3"
        log.info("[%d/%d] %s", idx, len(pending), filename)

        # 下载（带重试）
        audio_data: bytes | None = None
        download_ok = False
        for attempt in range(1, RETRY_TIMES + 1):
            try:
                audio_data = download_from_supabase(filename)
                download_ok = True
                break
            except Exception as e:
                log.warning("  下载失败（第%d次）: %s", attempt, e)
                if attempt < RETRY_TIMES:
                    time.sleep(RETRY_DELAY)

        if not download_ok:
            log.error("  ❌ 下载彻底失败: %s", number)
            _append_log(FAILED_LOG, number)
            failed_count += 1
            continue

        if audio_data is None:
            log.warning("  ⚠️  Supabase 无此音频（404）: %s", filename)
            _append_log(MISSING_LOG, number)
            missing_count += 1
            continue

        # 上传到 R2（带重试）
        upload_ok = False
        for attempt in range(1, RETRY_TIMES + 1):
            try:
                upload_to_r2(r2, filename, audio_data)
                upload_ok = True
                break
            except Exception as e:
                log.warning("  上传失败（第%d次）: %s", attempt, e)
                if attempt < RETRY_TIMES:
                    time.sleep(RETRY_DELAY)

        if upload_ok:
            log.info("  ✅ 上传成功: %s", filename)
            _append_log(SUCCESS_LOG, number)
            success_count += 1
        else:
            log.error("  ❌ 上传彻底失败: %s", number)
            _append_log(FAILED_LOG, number)
            failed_count += 1

    log.info("─" * 50)
    log.info("完成  ✅ 成功: %d  ❌ 失败: %d  ⚠️  无音频: %d",
             success_count, failed_count, missing_count)


if __name__ == "__main__":
    main()
