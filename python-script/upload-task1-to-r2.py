"""
upload-task1-to-r2.py
从 Supabase word-audios 下载 task1 全部单词音频，上传到 Cloudflare R2。

日志文件（同目录）：
  r2_upload_success.log  — 成功上传的单词（每行一个）
  r2_upload_failed.log   — 下载/上传失败的单词
  r2_upload_missing.log  — Supabase 上不存在音频的单词（404）

断点续传：
  已记录在 success / missing 日志中的单词自动跳过，
  直接重跑脚本即可续传，无需额外操作。
"""

import csv
import io
import logging
import os
import time
from pathlib import Path

import boto3
import requests
from botocore.config import Config

# ── 配置区（建议改用环境变量） ──────────────────────────────────────────────
SUPABASE_URL    = os.getenv("SUPABASE_URL",    "https://elckemvmphbjjlpzgoqy.supabase.co")
SUPABASE_KEY    = os.getenv("SUPABASE_KEY",    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsY2tlbXZtcGhiampscHpnb3F5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODkzOTg0NiwiZXhwIjoyMDc0NTE1ODQ2fQ.nuUPwTiRqurO5aZvFYzLMH6OGkCnxYG4G1XGANXlCWk")
SUPABASE_BUCKET = "word-audios"

R2_ACCOUNT_ID        = os.getenv("R2_ACCOUNT_ID",        "YOUR_ACCOUNT_ID")
R2_ACCESS_KEY_ID     = os.getenv("R2_ACCESS_KEY_ID",     "YOUR_ACCESS_KEY_ID")
R2_SECRET_ACCESS_KEY = os.getenv("R2_SECRET_ACCESS_KEY", "YOUR_SECRET_ACCESS_KEY")
R2_BUCKET_NAME       = os.getenv("R2_BUCKET_NAME",       "word-audios")




CSV_PATH       = Path(__file__).resolve().parent / "csv" / "ielts-task1.csv"
LOG_DIR        = Path(__file__).resolve().parent
SUCCESS_LOG    = LOG_DIR / "r2_upload_success.log"
FAILED_LOG     = LOG_DIR / "r2_upload_failed.log"
MISSING_LOG    = LOG_DIR / "r2_upload_missing.log"

DOWNLOAD_TIMEOUT = 15   # 秒，下载单个音频超时
RETRY_TIMES      = 3    # 下载/上传失败重试次数
RETRY_DELAY      = 2    # 重试间隔秒数
# ────────────────────────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)


# ── 日志工具 ─────────────────────────────────────────────────────────────────

def _load_log(path: Path) -> set[str]:
    """读取日志文件，返回已记录的单词集合（用于跳过）。"""
    if not path.exists():
        return set()
    with open(path, "r", encoding="utf-8") as f:
        return {line.strip() for line in f if line.strip()}


def _append_log(path: Path, word: str) -> None:
    with open(path, "a", encoding="utf-8") as f:
        f.write(word + "\n")


# ── CSV 读取 ──────────────────────────────────────────────────────────────────

def load_task1_words() -> list[str]:
    """读取 ielts-task1.csv 中所有 task1-* 章节的单词（去重，保序）。"""
    words: list[str] = []
    seen: set[str] = set()
    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            chapter = row.get("chapter", "")
            word    = row.get("word", "").strip()
            if chapter.startswith("task1") and word and word not in seen:
                words.append(word)
                seen.add(word)
    return words


# ── Supabase 下载 ─────────────────────────────────────────────────────────────

def build_audio_filename(word: str) -> str:
    """与前端 / gen-sound.py 保持一致：空格保留，/ 替换为 -。"""
    return word.replace("/", "-") + ".mp3"


def download_from_supabase(filename: str) -> bytes | None:
    """
    从 Supabase Storage 下载音频。
    返回 bytes（成功）、None（404 不存在）；网络错误抛出异常。
    """
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
    words = load_task1_words()
    log.info("task1 共 %d 个单词", len(words))

    # 读取已完成记录，用于断点续传
    done_success = _load_log(SUCCESS_LOG)
    done_missing  = _load_log(MISSING_LOG)
    skip_set      = done_success | done_missing

    pending = [w for w in words if w not in skip_set]
    log.info("已完成 %d 个（success=%d, missing=%d），本次处理 %d 个",
             len(skip_set), len(done_success), len(done_missing), len(pending))

    r2 = build_r2_client()

    success_count = 0
    failed_count  = 0
    missing_count = 0

    for idx, word in enumerate(pending, 1):
        filename = build_audio_filename(word)
        log.info("[%d/%d] 处理: %s → %s", idx, len(pending), word, filename)

        # ── 下载（带重试）
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
            log.error("  ❌ 下载彻底失败，记录到 failed 日志: %s", word)
            _append_log(FAILED_LOG, word)
            failed_count += 1
            continue

        if audio_data is None:
            log.warning("  ⚠️  Supabase 无此音频（404）: %s", word)
            _append_log(MISSING_LOG, word)
            missing_count += 1
            continue

        # ── 上传到 R2（带重试）
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
            _append_log(SUCCESS_LOG, word)
            success_count += 1
        else:
            log.error("  ❌ 上传彻底失败，记录到 failed 日志: %s", word)
            _append_log(FAILED_LOG, word)
            failed_count += 1

    log.info("─" * 50)
    log.info("完成  ✅ 成功: %d  ❌ 失败: %d  ⚠️  无音频: %d",
             success_count, failed_count, missing_count)
    log.info("日志文件:")
    log.info("  成功 → %s", SUCCESS_LOG)
    log.info("  失败 → %s", FAILED_LOG)
    log.info("  无音频 → %s", MISSING_LOG)


if __name__ == "__main__":
    main()
