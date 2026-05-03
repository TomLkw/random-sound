"""
upload-task1-to-r2.py
从 Supabase ielts_vocab 表查询指定 chapter 的单词，下载音频后上传到 Cloudflare R2。

日志文件（同目录）：
  r2_upload_success.log  — 成功上传的单词（每行一个）
  r2_upload_failed.log   — 下载/上传失败的单词
  r2_upload_missing.log  — Supabase 上不存在音频的单词（404）

断点续传：
  已记录在 success / missing 日志中的单词自动跳过，
  直接重跑脚本即可续传，无需额外操作。
"""

import logging
import os
import time
from pathlib import Path

import boto3
import requests
from botocore.config import Config
from supabase import create_client, Client

# ── 配置区 ────────────────────────────────────────────────────────────────────
SUPABASE_URL    = os.getenv("SUPABASE_URL",    "https://elckemvmphbjjlpzgoqy.supabase.co")
SUPABASE_KEY    = os.getenv("SUPABASE_KEY",    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsY2tlbXZtcGhiampscHpnb3F5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODkzOTg0NiwiZXhwIjoyMDc0NTE1ODQ2fQ.nuUPwTiRqurO5aZvFYzLMH6OGkCnxYG4G1XGANXlCWk")
SUPABASE_BUCKET = "word-audios"

# 要迁移的章节，改这里即可，或用环境变量 TARGET_CHAPTER=3.2 python upload-task1-to-r2.py
TARGET_CHAPTER = os.getenv("TARGET_CHAPTER", "5.3")

R2_ACCOUNT_ID        = os.getenv("R2_ACCOUNT_ID",        "5d6465c39769dbba52037ae93dddea27")
R2_ACCESS_KEY_ID     = os.getenv("R2_ACCESS_KEY_ID",     "73aece21c25ad9ffee2b10354353a064")
R2_SECRET_ACCESS_KEY = os.getenv("R2_SECRET_ACCESS_KEY", "29038283da97449fc31434ea08019fb889106bb1f98ef065bd34c3570e63e8cd")
R2_BUCKET_NAME       = os.getenv("R2_BUCKET_NAME",       "hear-audio")

LOG_DIR      = Path(__file__).resolve().parent
SUCCESS_LOG  = LOG_DIR / "r2_upload_success.log"
FAILED_LOG   = LOG_DIR / "r2_upload_failed.log"
MISSING_LOG  = LOG_DIR / "r2_upload_missing.log"

DOWNLOAD_TIMEOUT = 15  # 秒
RETRY_TIMES      = 3
RETRY_DELAY      = 2
# ─────────────────────────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)


# ── 日志工具 ──────────────────────────────────────────────────────────────────

def _load_log(path: Path) -> set[str]:
    """读取日志文件，返回已记录的单词集合，忽略章节标记行（# 开头）。"""
    if not path.exists():
        return set()
    with open(path, "r", encoding="utf-8") as f:
        return {line.strip() for line in f if line.strip() and not line.startswith("#")}


def _append_log(path: Path, chapter: str, word: str) -> None:
    with open(path, "a", encoding="utf-8") as f:
        f.write(word + "\n")


def _write_chapter_header(path: Path, chapter: str) -> None:
    """在日志开头写入章节标记（仅首次写入时）。"""
    with open(path, "a", encoding="utf-8") as f:
        f.write(f"# chapter: {chapter}\n")


# ── Supabase 查询单词 ─────────────────────────────────────────────────────────

def load_words_from_supabase(chapter: str) -> list[str]:
    """从 ielts_vocab 表查询指定 chapter 的所有单词（去重，保序）。"""
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    words: list[str] = []
    seen: set[str] = set()
    page_size = 1000
    offset = 0

    while True:
        resp = (
            supabase.table("ielts_vocab")
            .select("word")
            .eq("chapter", chapter)
            .range(offset, offset + page_size - 1)
            .execute()
        )
        rows = resp.data or []
        for row in rows:
            word = (row.get("word") or "").strip()
            if word and word not in seen:
                words.append(word)
                seen.add(word)
        if len(rows) < page_size:
            break
        offset += page_size

    return words


# ── Supabase Storage 下载音频 ─────────────────────────────────────────────────

def build_audio_filename(word: str) -> str:
    """与前端保持一致：/ 替换为 -，空格保留。"""
    return word.replace("/", "-") + ".mp3"


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
    log.info("目标章节: %s", TARGET_CHAPTER)
    words = load_words_from_supabase(TARGET_CHAPTER)
    log.info("从 Supabase ielts_vocab 查到 %d 个单词", len(words))

    done_success = _load_log(SUCCESS_LOG)
    done_missing  = _load_log(MISSING_LOG)
    skip_set      = done_success | done_missing

    pending = [w for w in words if w not in skip_set]
    skipped = [w for w in words if w in skip_set]
    if skipped:
        log.info("跳过 %d 个: %s", len(skipped), skipped)
    log.info("已完成 %d 个（success=%d, missing=%d），本次处理 %d 个",
             len(skip_set), len(done_success), len(done_missing), len(pending))

    r2 = build_r2_client()
    success_count = failed_count = missing_count = 0

    # 写入本次运行的章节标记
    if pending:
        _write_chapter_header(SUCCESS_LOG, TARGET_CHAPTER)
        _write_chapter_header(FAILED_LOG, TARGET_CHAPTER)
        _write_chapter_header(MISSING_LOG, TARGET_CHAPTER)

    for idx, word in enumerate(pending, 1):
        filename = build_audio_filename(word)
        log.info("[%d/%d] %s → %s", idx, len(pending), word, filename)

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
            log.error("  ❌ 下载彻底失败: %s", word)
            _append_log(FAILED_LOG, TARGET_CHAPTER, word)
            failed_count += 1
            continue

        if audio_data is None:
            log.warning("  ⚠️  Supabase 无此音频（404）: %s", word)
            _append_log(MISSING_LOG, TARGET_CHAPTER, word)
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
            _append_log(SUCCESS_LOG, TARGET_CHAPTER, word)
            success_count += 1
        else:
            log.error("  ❌ 上传彻底失败: %s", word)
            _append_log(FAILED_LOG, TARGET_CHAPTER, word)
            failed_count += 1

    log.info("─" * 50)
    log.info("完成  ✅ 成功: %d  ❌ 失败: %d  ⚠️  无音频: %d",
             success_count, failed_count, missing_count)


if __name__ == "__main__":
    main()
