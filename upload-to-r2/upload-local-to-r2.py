"""
upload-local-to-r2.py
从本地目录直接上传音频文件到 Cloudflare R2。

示例：
  python upload-to-r2/upload-local-to-r2.py ./local-audios
  python upload-to-r2/upload-local-to-r2.py ./local-audios --prefix task2/
  python upload-to-r2/upload-local-to-r2.py ./local-audios --recursive --dry-run

日志文件（同目录）：
  r2_local_success.log  — 成功上传的 R2 key
  r2_local_failed.log   — 上传失败的本地文件路径

断点续传：
  已记录在 success 日志里的 R2 key 会自动跳过，直接重跑即可。
"""

import argparse
import logging
import mimetypes
import os
import time
from pathlib import Path

# ── 配置区 ────────────────────────────────────────────────────────────────────
R2_ACCOUNT_ID = os.getenv("R2_ACCOUNT_ID", "5d6465c39769dbba52037ae93dddea27")
R2_ACCESS_KEY_ID = os.getenv("R2_ACCESS_KEY_ID", "73aece21c25ad9ffee2b10354353a064")
R2_SECRET_ACCESS_KEY = os.getenv(
    "R2_SECRET_ACCESS_KEY",
    "29038283da97449fc31434ea08019fb889106bb1f98ef065bd34c3570e63e8cd",
)
R2_BUCKET_NAME = os.getenv("R2_BUCKET_NAME", "hear-audio")

LOG_DIR = Path(__file__).resolve().parent
SUCCESS_LOG = LOG_DIR / "r2_local_success.log"
FAILED_LOG = LOG_DIR / "r2_local_failed.log"

RETRY_TIMES = 3
RETRY_DELAY = 2
DEFAULT_EXTENSIONS = [".mp3"]
# ─────────────────────────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="从本地目录直接上传音频文件到 Cloudflare R2。"
    )
    parser.add_argument(
        "local_dir",
        nargs="?",
        default=".",
        help="本地音频目录，默认当前目录。",
    )
    parser.add_argument(
        "--prefix",
        default="",
        help="R2 对象名前缀，例如 task2/。默认直接上传到 bucket 根目录。",
    )
    parser.add_argument(
        "--ext",
        nargs="+",
        default=DEFAULT_EXTENSIONS,
        help="要上传的文件扩展名，默认 .mp3。可写多个，例如 --ext .mp3 .wav。",
    )
    parser.add_argument(
        "--recursive",
        action="store_true",
        help="递归上传子目录；R2 key 会保留相对目录结构。",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="只打印将要上传的文件，不真正上传。",
    )
    parser.add_argument(
        "--no-skip",
        action="store_true",
        help="忽略 success 日志，强制重新上传。",
    )
    return parser.parse_args()


def normalize_prefix(prefix: str) -> str:
    prefix = prefix.strip().lstrip("/")
    if prefix and not prefix.endswith("/"):
        prefix += "/"
    return prefix


def normalize_extensions(exts: list[str]) -> set[str]:
    normalized = set()
    for ext in exts:
        ext = ext.strip().lower()
        if not ext:
            continue
        normalized.add(ext if ext.startswith(".") else "." + ext)
    return normalized


def _load_log(path: Path) -> set[str]:
    if not path.exists():
        return set()
    with open(path, "r", encoding="utf-8") as f:
        return {line.strip() for line in f if line.strip() and not line.startswith("#")}


def _append_log(path: Path, value: str) -> None:
    with open(path, "a", encoding="utf-8") as f:
        f.write(value + "\n")


def collect_files(local_dir: Path, extensions: set[str], recursive: bool) -> list[Path]:
    pattern = "**/*" if recursive else "*"
    files = [
        path
        for path in local_dir.glob(pattern)
        if path.is_file() and path.suffix.lower() in extensions
    ]
    return sorted(files, key=lambda p: str(p.relative_to(local_dir)).lower())


def build_r2_client():
    import boto3
    from botocore.config import Config

    endpoint = f"https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
    return boto3.client(
        "s3",
        endpoint_url=endpoint,
        aws_access_key_id=R2_ACCESS_KEY_ID,
        aws_secret_access_key=R2_SECRET_ACCESS_KEY,
        config=Config(signature_version="s3v4"),
        region_name="auto",
    )


def build_r2_key(local_dir: Path, file_path: Path, prefix: str) -> str:
    relative_key = file_path.relative_to(local_dir).as_posix()
    return prefix + relative_key


def upload_file_to_r2(client, file_path: Path, r2_key: str) -> None:
    content_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
    with open(file_path, "rb") as f:
        client.put_object(
            Bucket=R2_BUCKET_NAME,
            Key=r2_key,
            Body=f,
            ContentType=content_type,
        )


def main() -> None:
    args = parse_args()
    local_dir = Path(args.local_dir).expanduser().resolve()
    prefix = normalize_prefix(args.prefix)
    extensions = normalize_extensions(args.ext)

    if not local_dir.exists() or not local_dir.is_dir():
        raise SystemExit(f"本地目录不存在或不是目录: {local_dir}")

    files = collect_files(local_dir, extensions, args.recursive)
    if not files:
        log.warning("没有找到要上传的文件: %s  ext=%s", local_dir, sorted(extensions))
        return

    done_success = set() if args.no_skip else _load_log(SUCCESS_LOG)
    planned: list[tuple[Path, str]] = []
    skipped: list[str] = []

    for file_path in files:
        r2_key = build_r2_key(local_dir, file_path, prefix)
        if r2_key in done_success:
            skipped.append(r2_key)
            continue
        planned.append((file_path, r2_key))

    log.info("本地目录: %s", local_dir)
    log.info("R2 bucket: %s", R2_BUCKET_NAME)
    log.info("R2 prefix: %s", prefix or "(根目录)")
    log.info("找到 %d 个文件，跳过 %d 个，本次处理 %d 个", len(files), len(skipped), len(planned))

    if args.dry_run:
        for file_path, r2_key in planned:
            log.info("[dry-run] %s -> %s", file_path.name, r2_key)
        return

    r2 = build_r2_client()
    success_count = failed_count = 0

    for idx, (file_path, r2_key) in enumerate(planned, 1):
        log.info("[%d/%d] %s -> %s", idx, len(planned), file_path.name, r2_key)

        upload_ok = False
        for attempt in range(1, RETRY_TIMES + 1):
            try:
                upload_file_to_r2(r2, file_path, r2_key)
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
            log.error("  ❌ 上传彻底失败: %s", file_path)
            _append_log(FAILED_LOG, str(file_path))
            failed_count += 1

    log.info("─" * 50)
    log.info("完成  ✅ 成功: %d  ❌ 失败: %d", success_count, failed_count)


if __name__ == "__main__":
    main()
