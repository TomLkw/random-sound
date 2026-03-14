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
CSV_PATH = Path(__file__).resolve().parent / "local-doc" / "chapter3_vocab.csv"
TARGET_CHAPTER = "3.3"

# 初始化
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
speech_config = speechsdk.SpeechConfig(subscription=AZURE_SPEECH_KEY, region=AZURE_REGION)
speech_config.speech_synthesis_voice_name = "en-US-ChristopherNeural"


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
    """用 Azure TTS 合成单词发音并上传到 Supabase Storage (word-audios)。"""
    # 文件名：单词中空格等保留，与 Storage 路径一致
    safe_name = word.replace("/", "-")
    filename = f"{safe_name}.mp3"
    local_path = Path(f"./temp_{safe_name}.mp3")

    audio_config = speechsdk.audio.AudioOutputConfig(filename=str(local_path))
    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config, audio_config=audio_config
    )
    result = synthesizer.speak_text_async(word).get()

    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        with open(local_path, "rb") as f:
            supabase.storage.from_("word-audios").upload(
                path=filename,
                file=f,
                file_options={"content-type": "audio/mpeg"},
            )
        print(f"✅ 已预存: {word}")
        local_path.unlink(missing_ok=True)
        return True
    else:
        print(f"❌ 失败: {word}")
        local_path.unlink(missing_ok=True)
        return False


if __name__ == "__main__":
    words = load_words_from_csv(TARGET_CHAPTER)
    # words = ['charity']
    print(f"从 CSV 读取 chapter={TARGET_CHAPTER} 共 {len(words)} 个单词，开始预存声音…")
    ok = sum(1 for w in words if process_and_upload(w))
    print(f"完成: {ok}/{len(words)} 成功")