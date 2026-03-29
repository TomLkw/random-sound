import os
from pathlib import Path
from supabase import create_client, Client
import azure.cognitiveservices.speech as speechsdk

# --- 配置区（与 gen-sound.py 保持一致）---
SUPABASE_URL = "https://elckemvmphbjjlpzgoqy.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsY2tlbXZtcGhiampscHpnb3F5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODkzOTg0NiwiZXhwIjoyMDc0NTE1ODQ2fQ.nuUPwTiRqurO5aZvFYzLMH6OGkCnxYG4G1XGANXlCWk"
AZURE_SPEECH_KEY = "cc9095be4b154dc59067c6b4efe568e5"
AZURE_REGION = "eastasia"

VOICE_NAME = "en-US-JennyNeural"
SPEECH_RATE = 0.75  # 数字模式用慢速，与 index.html 的 ttsRate 一致

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
speech_config = speechsdk.SpeechConfig(subscription=AZURE_SPEECH_KEY, region=AZURE_REGION)
speech_config.speech_synthesis_voice_name = VOICE_NAME

# 从 index.html 提取的所有数字组（easy + hard）
# key: 文件名(en字段), value: 朗读文本(speech字段)
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


def synthesize_and_upload(number_str: str, speech_text: str) -> bool:
    filename = f"{number_str}.mp3"
    local_path = Path(f"./temp_num_{number_str}.mp3")

    audio_config = speechsdk.audio.AudioOutputConfig(filename=str(local_path))
    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config, audio_config=audio_config
    )

    ssml = f"""<speak version="1.0" xml:lang="en-US">
  <voice name="{VOICE_NAME}">
    <prosody rate="{SPEECH_RATE}">{speech_text}</prosody>
  </voice>
</speak>"""

    result = synthesizer.speak_ssml_async(ssml).get()

    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        with open(local_path, "rb") as f:
            supabase.storage.from_("word-audios").upload(
                path=filename,
                file=f,
                file_options={"content-type": "audio/mpeg", "x-upsert": "true"},
            )
        print(f"✅ {number_str}  ({speech_text})")
        local_path.unlink(missing_ok=True)
        return True
    else:
        print(f"❌ 失败: {number_str}  reason={result.reason}")
        local_path.unlink(missing_ok=True)
        return False


if __name__ == "__main__":
    total = len(NUMBER_GROUPS)
    ok = 0
    print(f"共 {total} 条数字，开始合成上传...\n")
    for num, speech in NUMBER_GROUPS.items():
        try:
            if synthesize_and_upload(num, speech):
                ok += 1
        except Exception as e:
            print(f"异常: {num} -> {e}")
    print(f"\n完成: {ok}/{total} 成功")
