import os
import csv
from pathlib import Path
from supabase import create_client, Client
import azure.cognitiveservices.speech as speechsdk

# --- 配置区 ---
SUPABASE_URL = "https://elckemvmphbjjlpzgoqy.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsY2tlbXZtcGhiampscHpnb3F5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODkzOTg0NiwiZXhwIjoyMDc0NTE1ODQ2fQ.nuUPwTiRqurO5aZvFYzLMH6OGkCnxYG4G1XGANXlCWk" # 注意：预存脚本建议用 service_role key 绕过 RLS
AZURE_SPEECH_KEY = "7b4038e10d1147a9aef71516fc1af06d"
AZURE_REGION = "eastasia" # 或你的区域

# CSV 路径（相对本脚本所在目录）
CSV_PATH = Path(__file__).resolve().parent / "local-doc" / "chapter5_vocab.csv"
TARGET_CHAPTER = "5.2"

# 初始化
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
speech_config = speechsdk.SpeechConfig(subscription=AZURE_SPEECH_KEY, region=AZURE_REGION)
speech_config.speech_synthesis_voice_name = "en-US-ChristopherNeural"

# 断点文件路径
CHECKPOINT_PATH = Path(__file__).resolve().parent / "checkpoint.txt"


def load_words_from_csv(chapter: str) -> list[str]:
    """从 chapter3_vocab.csv 读取指定 chapter 的单词列表。"""
    words = []
    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        next(reader)  # header
        for row in reader:
            if len(row) >= 2 and row[0] == chapter:
                words.append(row[1].strip())
    return words


def process_and_upload(word: str) -> bool:
    """用 Azure TTS 合成单词发音并上传到 Supabase Storage (word-audios)。

    按需求将语速调为原来的 1.2 倍。
    """
    # 文件名：单词中空格等保留，与 Storage 路径一致
    safe_name = word.replace("/", "-")
    filename = f"{safe_name}.mp3"
    local_path = Path(f"./temp_{safe_name}.mp3")

    audio_config = speechsdk.audio.AudioOutputConfig(filename=str(local_path))
    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config, audio_config=audio_config
    )

    # 使用 SSML 设置 1.2 倍语速
    ssml = f"""
        <speak version="1.0" xml:lang="en-US">
        <voice name="{speech_config.speech_synthesis_voice_name}">
            <prosody rate="1.2">{word}</prosody>
        </voice>
        </speak>
        """
    result = synthesizer.speak_ssml_async(ssml).get()

    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        with open(local_path, "rb") as f:
            # 文件名重复时，开启 upsert，直接覆盖已有文件而不是报错
            supabase.storage.from_("word-audios").upload(
                path=filename,
                file=f,
                file_options={
                    "content-type": "audio/mpeg",
                    "x-upsert": "true",
                },
            )
        print(f"✅ 已预存: {word}")
        local_path.unlink(missing_ok=True)
        return True
    else:
        print(f"❌ 失败: {word}")
        local_path.unlink(missing_ok=True)
        return False


def save_checkpoint(chapter: str, word: str) -> None:
    """保存当前处理进度到断点文件。"""
    with open(CHECKPOINT_PATH, "w", encoding="utf-8") as f:
        f.write(f"{chapter},{word}\n")
    print(f"已记录断点: {chapter},{word}")


def load_checkpoint() -> tuple[str, str] | None:
    """从断点文件读取上次异常位置。"""
    if not CHECKPOINT_PATH.exists():
        return None
    try:
        with open(CHECKPOINT_PATH, "r", encoding="utf-8") as f:
            line = f.readline().strip()
        if not line:
            return None
        parts = [p.strip() for p in line.split(",", 1)]
        if len(parts) != 2:
            return None
        return parts[0], parts[1]
    except Exception:
        return None


if __name__ == "__main__":
    words = load_words_from_csv(TARGET_CHAPTER)

    # 如果存在断点，从断点单词开始继续
    checkpoint = load_checkpoint()
    if checkpoint is not None:
        cp_chapter, cp_word = checkpoint
        if cp_chapter == TARGET_CHAPTER and cp_word in words:
            start_index = words.index(cp_word)
            words = words[start_index:]
            print(f"检测到断点，从 {cp_chapter},{cp_word} 继续处理…")
        else:
            print("检测到断点文件，但章节或单词不匹配，忽略该断点。")

    print(f"从 CSV 读取 chapter={TARGET_CHAPTER} 共 {len(words)} 个单词，开始预存声音…")

    ok = 0
    for w in words:
        try:
            success = process_and_upload(w)
        except Exception as e:
            print(f"处理 {w} 时发生异常: {e}")
            save_checkpoint(TARGET_CHAPTER, w)
            break

        if not success:
            save_checkpoint(TARGET_CHAPTER, w)
            break

        ok += 1

    # 全部成功则清理断点文件
    if ok == len(words) and CHECKPOINT_PATH.exists():
        CHECKPOINT_PATH.unlink(missing_ok=True)

    print(f"完成: {ok}/{len(words)} 成功")