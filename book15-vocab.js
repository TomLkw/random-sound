// 从剑雅 15 原文选取的听写词表，每个 Part 10 词，保留原文词形。
const BOOK15_VOCABULARY = {
    "book15-t1": [
        {
            "en": "agency",
            "zh": "职业介绍所",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90003"
        },
        {
            "en": "vacancies",
            "zh": "职位空缺",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90021"
        },
        {
            "en": "clerical",
            "zh": "文书工作的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90023"
        },
        {
            "en": "temporary",
            "zh": "临时的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90026"
        },
        {
            "en": "finance",
            "zh": "金融",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90026"
        },
        {
            "en": "receptionist",
            "zh": "接待员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90030"
        },
        {
            "en": "communication",
            "zh": "沟通",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90032"
        },
        {
            "en": "registration",
            "zh": "登记",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90049"
        },
        {
            "en": "certificates",
            "zh": "证书",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90058"
        },
        {
            "en": "candidates",
            "zh": "应聘者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p1&sentence=90066"
        },
        {
            "en": "destinations",
            "zh": "目的地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90012"
        },
        {
            "en": "ferry",
            "zh": "渡轮",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90020"
        },
        {
            "en": "supplement",
            "zh": "附加费",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90034"
        },
        {
            "en": "administrative",
            "zh": "行政的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90038"
        },
        {
            "en": "harbour",
            "zh": "港口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90044"
        },
        {
            "en": "parliament",
            "zh": "议会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90049"
        },
        {
            "en": "exhibition",
            "zh": "展览",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90047"
        },
        {
            "en": "heritage",
            "zh": "遗产",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90061"
        },
        {
            "en": "spectacular",
            "zh": "壮观的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90058"
        },
        {
            "en": "mediaeval",
            "zh": "中世纪的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p2&sentence=90069"
        },
        {
            "en": "unreliable",
            "zh": "不可靠的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90005"
        },
        {
            "en": "traits",
            "zh": "特征",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90007"
        },
        {
            "en": "stereotypes",
            "zh": "刻板印象",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90007"
        },
        {
            "en": "robust",
            "zh": "有力的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90008"
        },
        {
            "en": "consensus",
            "zh": "共识",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90013"
        },
        {
            "en": "sibling",
            "zh": "兄弟姐妹",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90014"
        },
        {
            "en": "nurturing",
            "zh": "养育",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90016"
        },
        {
            "en": "envious",
            "zh": "嫉妒的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90025"
        },
        {
            "en": "sociable",
            "zh": "合群的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90029"
        },
        {
            "en": "rivalry",
            "zh": "竞争",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p3&sentence=90066"
        },
        {
            "en": "eucalyptus",
            "zh": "桉树",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90001"
        },
        {
            "en": "shelter",
            "zh": "庇护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90007"
        },
        {
            "en": "nectar",
            "zh": "花蜜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90009"
        },
        {
            "en": "biodiversity",
            "zh": "生物多样性",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90010"
        },
        {
            "en": "disinfectant",
            "zh": "消毒剂",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90012"
        },
        {
            "en": "prematurely",
            "zh": "过早地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90016"
        },
        {
            "en": "vegetation",
            "zh": "植被",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90045"
        },
        {
            "en": "nutrients",
            "zh": "养分",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90057"
        },
        {
            "en": "indigenous",
            "zh": "本土的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90060"
        },
        {
            "en": "ecosystem",
            "zh": "生态系统",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t1_p4&sentence=90068"
        }
    ],
    "book15-t2": [
        {
            "en": "festival",
            "zh": "节日",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90004"
        },
        {
            "en": "concert",
            "zh": "音乐会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90007"
        },
        {
            "en": "orchestra",
            "zh": "管弦乐队",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90009"
        },
        {
            "en": "ballet",
            "zh": "芭蕾舞",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90016"
        },
        {
            "en": "comedy",
            "zh": "喜剧",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90023"
        },
        {
            "en": "amateur",
            "zh": "业余的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90025"
        },
        {
            "en": "review",
            "zh": "评论",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90030"
        },
        {
            "en": "composers",
            "zh": "作曲家",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90038"
        },
        {
            "en": "workshops",
            "zh": "工作坊",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90044"
        },
        {
            "en": "cookery",
            "zh": "烹饪",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p1&sentence=90048"
        },
        {
            "en": "transformation",
            "zh": "改造",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90002"
        },
        {
            "en": "council",
            "zh": "市政委员会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90007"
        },
        {
            "en": "ownership",
            "zh": "所有权",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90009"
        },
        {
            "en": "possession",
            "zh": "占有",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90015"
        },
        {
            "en": "statue",
            "zh": "雕像",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90016"
        },
        {
            "en": "residential",
            "zh": "住宅的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90023"
        },
        {
            "en": "petitions",
            "zh": "请愿书",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90025"
        },
        {
            "en": "demonstrations",
            "zh": "示威活动",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90025"
        },
        {
            "en": "retained",
            "zh": "保留",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90034"
        },
        {
            "en": "revised",
            "zh": "修改",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p2&sentence=90039"
        },
        {
            "en": "literature",
            "zh": "文学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90004"
        },
        {
            "en": "display",
            "zh": "展示",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90004"
        },
        {
            "en": "profile",
            "zh": "知名度",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90015"
        },
        {
            "en": "publicised",
            "zh": "宣传",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90016"
        },
        {
            "en": "lecturers",
            "zh": "讲师",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90018"
        },
        {
            "en": "categories",
            "zh": "类别",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90020"
        },
        {
            "en": "novels",
            "zh": "小说",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90026"
        },
        {
            "en": "campaigning",
            "zh": "开展社会活动",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90032"
        },
        {
            "en": "reforms",
            "zh": "改革",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90033"
        },
        {
            "en": "quotations",
            "zh": "引文",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p3&sentence=90048"
        },
        {
            "en": "rural",
            "zh": "农村的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90002"
        },
        {
            "en": "agricultural",
            "zh": "农业的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90003"
        },
        {
            "en": "arid",
            "zh": "干旱的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90006"
        },
        {
            "en": "charcoal",
            "zh": "木炭",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90009"
        },
        {
            "en": "sustainable",
            "zh": "可持续的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90010"
        },
        {
            "en": "irrigation",
            "zh": "灌溉",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90014"
        },
        {
            "en": "livestock",
            "zh": "牲畜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90020"
        },
        {
            "en": "cultivated",
            "zh": "耕种",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90026"
        },
        {
            "en": "preservation",
            "zh": "保存",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90042"
        },
        {
            "en": "protein",
            "zh": "蛋白质",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t2_p4&sentence=90047"
        }
    ],
    "book15-t3": [
        {
            "en": "representatives",
            "zh": "代表",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90003"
        },
        {
            "en": "administrative",
            "zh": "行政的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90011"
        },
        {
            "en": "assistant",
            "zh": "助理",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90011"
        },
        {
            "en": "furniture",
            "zh": "家具",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90015"
        },
        {
            "en": "requirements",
            "zh": "要求",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90020"
        },
        {
            "en": "appoint",
            "zh": "任命",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90024"
        },
        {
            "en": "diary",
            "zh": "日程簿",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90030"
        },
        {
            "en": "spreadsheets",
            "zh": "电子表格",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90037"
        },
        {
            "en": "interpersonal",
            "zh": "人际交往的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90039"
        },
        {
            "en": "teleconferencing",
            "zh": "电话会议",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p1&sentence=90046"
        },
        {
            "en": "scheme",
            "zh": "计划",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90002"
        },
        {
            "en": "residents",
            "zh": "居民",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90004"
        },
        {
            "en": "toddler",
            "zh": "学步幼儿",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90010"
        },
        {
            "en": "campaigning",
            "zh": "开展倡议活动",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90012"
        },
        {
            "en": "volunteer",
            "zh": "志愿者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90020"
        },
        {
            "en": "wardens",
            "zh": "管理员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90020"
        },
        {
            "en": "motorists",
            "zh": "驾驶者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90024"
        },
        {
            "en": "demand",
            "zh": "需求",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90039"
        },
        {
            "en": "suburbs",
            "zh": "郊区",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90042"
        },
        {
            "en": "supportive",
            "zh": "支持的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p2&sentence=90047"
        },
        {
            "en": "assignment",
            "zh": "作业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90004"
        },
        {
            "en": "coverage",
            "zh": "新闻报道",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90006"
        },
        {
            "en": "editor",
            "zh": "编辑",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90014"
        },
        {
            "en": "headline",
            "zh": "标题",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90018"
        },
        {
            "en": "graphics",
            "zh": "图像",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90021"
        },
        {
            "en": "structure",
            "zh": "结构",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90027"
        },
        {
            "en": "paragraph",
            "zh": "段落",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90028"
        },
        {
            "en": "misleading",
            "zh": "误导性的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90032"
        },
        {
            "en": "controversy",
            "zh": "争议",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90042"
        },
        {
            "en": "assumptions",
            "zh": "假设",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p3&sentence=90045"
        },
        {
            "en": "cleanliness",
            "zh": "清洁",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90001"
        },
        {
            "en": "laundry",
            "zh": "洗衣",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90001"
        },
        {
            "en": "prehistoric",
            "zh": "史前的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90003"
        },
        {
            "en": "excavation",
            "zh": "挖掘",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90007"
        },
        {
            "en": "cylinders",
            "zh": "圆筒",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90009"
        },
        {
            "en": "inscriptions",
            "zh": "铭文",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90010"
        },
        {
            "en": "aesthetic",
            "zh": "审美的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90013"
        },
        {
            "en": "substance",
            "zh": "物质",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90019"
        },
        {
            "en": "unsanitary",
            "zh": "不卫生的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90036"
        },
        {
            "en": "alkali",
            "zh": "碱",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t3_p4&sentence=90048"
        }
    ],
    "book15-t4": [
        {
            "en": "satisfaction",
            "zh": "满意",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90002"
        },
        {
            "en": "survey",
            "zh": "调查",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90002"
        },
        {
            "en": "journalist",
            "zh": "记者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90010"
        },
        {
            "en": "discount",
            "zh": "折扣",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90032"
        },
        {
            "en": "complaints",
            "zh": "投诉",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90041"
        },
        {
            "en": "queue",
            "zh": "队列",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90053"
        },
        {
            "en": "reliable",
            "zh": "可靠的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90066"
        },
        {
            "en": "delay",
            "zh": "延误",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90067"
        },
        {
            "en": "facilities",
            "zh": "设施",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90070"
        },
        {
            "en": "platforms",
            "zh": "站台",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p1&sentence=90083"
        },
        {
            "en": "subcommittee",
            "zh": "小组委员会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90001"
        },
        {
            "en": "overview",
            "zh": "概述",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90004"
        },
        {
            "en": "assortment",
            "zh": "各种各样",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90007"
        },
        {
            "en": "boundary",
            "zh": "边界",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90016"
        },
        {
            "en": "ramp",
            "zh": "坡道",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90021"
        },
        {
            "en": "butterflies",
            "zh": "蝴蝶",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90025"
        },
        {
            "en": "funds",
            "zh": "资金",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90031"
        },
        {
            "en": "irrespective",
            "zh": "不考虑",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90035"
        },
        {
            "en": "disastrous",
            "zh": "灾难性的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90040"
        },
        {
            "en": "tropical",
            "zh": "热带的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p2&sentence=90043"
        },
        {
            "en": "refrigeration",
            "zh": "制冷",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90001"
        },
        {
            "en": "insulating",
            "zh": "隔热",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90011"
        },
        {
            "en": "straw",
            "zh": "稻草",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90011"
        },
        {
            "en": "sawdust",
            "zh": "锯末",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90011"
        },
        {
            "en": "domestic",
            "zh": "家用的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90023"
        },
        {
            "en": "components",
            "zh": "零部件",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90029"
        },
        {
            "en": "appliances",
            "zh": "家用电器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90038"
        },
        {
            "en": "manufacturers",
            "zh": "制造商",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90040"
        },
        {
            "en": "chemicals",
            "zh": "化学物质",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90055"
        },
        {
            "en": "competitors",
            "zh": "竞争对手",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p3&sentence=90091"
        },
        {
            "en": "consumerism",
            "zh": "消费主义",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90004"
        },
        {
            "en": "possessions",
            "zh": "财产",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90006"
        },
        {
            "en": "manufacturing",
            "zh": "制造业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90014"
        },
        {
            "en": "textiles",
            "zh": "纺织品",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90021"
        },
        {
            "en": "fabrics",
            "zh": "织物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90022"
        },
        {
            "en": "workshops",
            "zh": "作坊",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90023"
        },
        {
            "en": "canals",
            "zh": "运河",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90036"
        },
        {
            "en": "distribution",
            "zh": "分销",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90045"
        },
        {
            "en": "entrepreneurs",
            "zh": "企业家",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90051"
        },
        {
            "en": "cutlery",
            "zh": "餐具",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts15_t4_p4&sentence=90061"
        }
    ]
};
