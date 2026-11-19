// 剑雅 19 原文听写词表，每个 Test 40 词，每个 Part 10 词。
// 按常见听力场景、通用学术词汇和拼写练习价值选取，保留原文词形及定位链接。
const BOOK19_VOCABULARY = {
    "book19-t1": [
        {
            "en": "habitat",
            "zh": "栖息地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90007"
        },
        {
            "en": "wetland",
            "zh": "湿地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90008"
        },
        {
            "en": "woodland",
            "zh": "林地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90008"
        },
        {
            "en": "species",
            "zh": "物种",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90010"
        },
        {
            "en": "wildlife",
            "zh": "野生动物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90017"
        },
        {
            "en": "educational",
            "zh": "教育的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90021"
        },
        {
            "en": "geography",
            "zh": "地理学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90028"
        },
        {
            "en": "compass",
            "zh": "指南针",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90030"
        },
        {
            "en": "confidence",
            "zh": "信心",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90051"
        },
        {
            "en": "invoice",
            "zh": "发票",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p1&sentence=90058"
        },
        {
            "en": "association",
            "zh": "协会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90001"
        },
        {
            "en": "relationship",
            "zh": "关系",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90003"
        },
        {
            "en": "footbridge",
            "zh": "人行桥",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90013"
        },
        {
            "en": "museum",
            "zh": "博物馆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90015"
        },
        {
            "en": "fundraising",
            "zh": "筹款活动",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90018"
        },
        {
            "en": "demonstration",
            "zh": "示范",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90021"
        },
        {
            "en": "cookery",
            "zh": "烹饪",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90021"
        },
        {
            "en": "barbecue",
            "zh": "烧烤",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90031"
        },
        {
            "en": "disabled",
            "zh": "残障的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90048"
        },
        {
            "en": "playground",
            "zh": "游乐场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p2&sentence=90050"
        },
        {
            "en": "alternative",
            "zh": "替代选择",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90003"
        },
        {
            "en": "products",
            "zh": "产品",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90004"
        },
        {
            "en": "process",
            "zh": "过程",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90011"
        },
        {
            "en": "printing",
            "zh": "打印",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90013"
        },
        {
            "en": "samples",
            "zh": "样品",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90021"
        },
        {
            "en": "sensors",
            "zh": "传感器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90023"
        },
        {
            "en": "storage",
            "zh": "储存",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90032"
        },
        {
            "en": "consumers",
            "zh": "消费者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90043"
        },
        {
            "en": "packaging",
            "zh": "包装",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90044"
        },
        {
            "en": "allergies",
            "zh": "过敏症",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p3&sentence=90049"
        },
        {
            "en": "archaeologists",
            "zh": "考古学家",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90004"
        },
        {
            "en": "settlement",
            "zh": "聚落",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90020"
        },
        {
            "en": "preserved",
            "zh": "保存完好的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90021"
        },
        {
            "en": "oxygen",
            "zh": "氧气",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90026"
        },
        {
            "en": "farmers",
            "zh": "农民",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90029"
        },
        {
            "en": "communities",
            "zh": "群体；社区",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90030"
        },
        {
            "en": "pottery",
            "zh": "陶器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90038"
        },
        {
            "en": "shelter",
            "zh": "遮蔽处",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90050"
        },
        {
            "en": "farming",
            "zh": "农业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90054"
        },
        {
            "en": "sustainable",
            "zh": "可持续的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t1_p4&sentence=90056"
        }
    ],
    "book19-t2": [
        {
            "en": "guitar",
            "zh": "吉他",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90004"
        },
        {
            "en": "coordinator",
            "zh": "协调员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90011"
        },
        {
            "en": "retired",
            "zh": "退休的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90018"
        },
        {
            "en": "beginners",
            "zh": "初学者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90028"
        },
        {
            "en": "college",
            "zh": "学院",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90034"
        },
        {
            "en": "dancing",
            "zh": "舞蹈",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90037"
        },
        {
            "en": "instrument",
            "zh": "乐器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90053"
        },
        {
            "en": "recording",
            "zh": "录音",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90077"
        },
        {
            "en": "fingers",
            "zh": "手指",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90069"
        },
        {
            "en": "clapping",
            "zh": "拍手",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p1&sentence=90071"
        },
        {
            "en": "volunteer",
            "zh": "志愿者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90001"
        },
        {
            "en": "charity",
            "zh": "慈善机构",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90012"
        },
        {
            "en": "donation",
            "zh": "捐款",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90012"
        },
        {
            "en": "assessment",
            "zh": "评估",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90015"
        },
        {
            "en": "vision",
            "zh": "视力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90016"
        },
        {
            "en": "glasses",
            "zh": "眼镜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90018"
        },
        {
            "en": "surgery",
            "zh": "手术",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90019"
        },
        {
            "en": "equipment",
            "zh": "装备",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90031"
        },
        {
            "en": "confidence",
            "zh": "信心",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90043"
        },
        {
            "en": "emergency",
            "zh": "紧急情况",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p2&sentence=90051"
        },
        {
            "en": "recycling",
            "zh": "回收利用",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90002"
        },
        {
            "en": "footwear",
            "zh": "鞋类",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90002"
        },
        {
            "en": "trainers",
            "zh": "运动鞋",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90012"
        },
        {
            "en": "casual",
            "zh": "休闲的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90017"
        },
        {
            "en": "uniform",
            "zh": "制服",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90017"
        },
        {
            "en": "fashion",
            "zh": "时尚",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90025"
        },
        {
            "en": "leather",
            "zh": "皮革",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90048"
        },
        {
            "en": "landfill",
            "zh": "垃圾填埋场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90067"
        },
        {
            "en": "overseas",
            "zh": "在海外",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90076"
        },
        {
            "en": "behaviour",
            "zh": "行为",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p3&sentence=90079"
        },
        {
            "en": "species",
            "zh": "物种",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90003"
        },
        {
            "en": "segments",
            "zh": "节段",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90017"
        },
        {
            "en": "oxygen",
            "zh": "氧气",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90025"
        },
        {
            "en": "habitats",
            "zh": "栖息地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90035"
        },
        {
            "en": "radiation",
            "zh": "辐射",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90037"
        },
        {
            "en": "pressure",
            "zh": "压力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90038"
        },
        {
            "en": "temperatures",
            "zh": "温度",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90039"
        },
        {
            "en": "protein",
            "zh": "蛋白质",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90051"
        },
        {
            "en": "liquids",
            "zh": "液体",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90060"
        },
        {
            "en": "conservation",
            "zh": "保护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t2_p4&sentence=90066"
        }
    ],
    "book19-t3": [
        {
            "en": "harbour",
            "zh": "港口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90007"
        },
        {
            "en": "market",
            "zh": "市场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90012"
        },
        {
            "en": "vegetables",
            "zh": "蔬菜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90025"
        },
        {
            "en": "packaging",
            "zh": "包装",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90026"
        },
        {
            "en": "organic",
            "zh": "有机的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90027"
        },
        {
            "en": "warehouse",
            "zh": "仓库",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90036"
        },
        {
            "en": "restaurant",
            "zh": "餐厅",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90037"
        },
        {
            "en": "shellfish",
            "zh": "贝类",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90049"
        },
        {
            "en": "seaweed",
            "zh": "海藻",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90055"
        },
        {
            "en": "dessert",
            "zh": "甜点",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p1&sentence=90063"
        },
        {
            "en": "festival",
            "zh": "节庆活动",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90001"
        },
        {
            "en": "workshops",
            "zh": "工作坊",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90006"
        },
        {
            "en": "illustrator",
            "zh": "插画师",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90010"
        },
        {
            "en": "participants",
            "zh": "参与者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90011"
        },
        {
            "en": "friendship",
            "zh": "友谊",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90013"
        },
        {
            "en": "loneliness",
            "zh": "孤独",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90018"
        },
        {
            "en": "survey",
            "zh": "调查",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90019"
        },
        {
            "en": "immigration",
            "zh": "移民",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90036"
        },
        {
            "en": "vocabulary",
            "zh": "词汇",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90042"
        },
        {
            "en": "librarians",
            "zh": "图书管理员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p2&sentence=90056"
        },
        {
            "en": "science",
            "zh": "科学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90006"
        },
        {
            "en": "experiment",
            "zh": "实验",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90015"
        },
        {
            "en": "methodology",
            "zh": "研究方法",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90019"
        },
        {
            "en": "records",
            "zh": "记录",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90020"
        },
        {
            "en": "confidentiality",
            "zh": "保密性",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90022"
        },
        {
            "en": "permission",
            "zh": "许可",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90030"
        },
        {
            "en": "outline",
            "zh": "概要",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90031"
        },
        {
            "en": "nutrition",
            "zh": "营养",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90044"
        },
        {
            "en": "supplements",
            "zh": "补充剂",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90045"
        },
        {
            "en": "variable",
            "zh": "变量",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p3&sentence=90054"
        },
        {
            "en": "microplastics",
            "zh": "微塑料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90001"
        },
        {
            "en": "environment",
            "zh": "环境",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90003"
        },
        {
            "en": "synthetic",
            "zh": "合成的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90007"
        },
        {
            "en": "clothing",
            "zh": "衣物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90007"
        },
        {
            "en": "particles",
            "zh": "颗粒",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90010"
        },
        {
            "en": "seafood",
            "zh": "海产品",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90021"
        },
        {
            "en": "manufacturers",
            "zh": "制造商",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90025"
        },
        {
            "en": "fertilisers",
            "zh": "肥料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90029"
        },
        {
            "en": "nutrients",
            "zh": "养分",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90033"
        },
        {
            "en": "ecosystems",
            "zh": "生态系统",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t3_p4&sentence=90054"
        }
    ],
    "book19-t4": [
        {
            "en": "supervisors",
            "zh": "主管",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90002"
        },
        {
            "en": "appointment",
            "zh": "任职安排",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90014"
        },
        {
            "en": "lockers",
            "zh": "储物柜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90017"
        },
        {
            "en": "passport",
            "zh": "护照",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90025"
        },
        {
            "en": "uniform",
            "zh": "制服",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90030"
        },
        {
            "en": "bakery",
            "zh": "面包房",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90038"
        },
        {
            "en": "packaging",
            "zh": "包装",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90048"
        },
        {
            "en": "labels",
            "zh": "标签",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90049"
        },
        {
            "en": "storeroom",
            "zh": "储藏室",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90061"
        },
        {
            "en": "gloves",
            "zh": "手套",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p1&sentence=90085"
        },
        {
            "en": "training",
            "zh": "训练",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90004"
        },
        {
            "en": "programmes",
            "zh": "计划",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90004"
        },
        {
            "en": "fitness",
            "zh": "体能",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90010"
        },
        {
            "en": "ability",
            "zh": "能力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90010"
        },
        {
            "en": "progress",
            "zh": "进步",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90016"
        },
        {
            "en": "confidence",
            "zh": "信心",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90028"
        },
        {
            "en": "schedule",
            "zh": "日程",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90040"
        },
        {
            "en": "stress",
            "zh": "压力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90041"
        },
        {
            "en": "spectators",
            "zh": "观众",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90055"
        },
        {
            "en": "achievement",
            "zh": "成就",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p2&sentence=90059"
        },
        {
            "en": "placement",
            "zh": "实习",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90001"
        },
        {
            "en": "publishers",
            "zh": "出版商",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90017"
        },
        {
            "en": "quality",
            "zh": "质量",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90017"
        },
        {
            "en": "collector",
            "zh": "收藏者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90023"
        },
        {
            "en": "decorative",
            "zh": "装饰性的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90034"
        },
        {
            "en": "shelves",
            "zh": "书架",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90035"
        },
        {
            "en": "editions",
            "zh": "版本",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90067"
        },
        {
            "en": "ladder",
            "zh": "梯子",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90072"
        },
        {
            "en": "cushions",
            "zh": "软垫",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90080"
        },
        {
            "en": "refreshments",
            "zh": "茶点",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p3&sentence=90085"
        },
        {
            "en": "emissions",
            "zh": "排放",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90003"
        },
        {
            "en": "environment",
            "zh": "环境",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90007"
        },
        {
            "en": "species",
            "zh": "物种",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90010"
        },
        {
            "en": "biodiversity",
            "zh": "生物多样性",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90014"
        },
        {
            "en": "conservation",
            "zh": "保护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90019"
        },
        {
            "en": "communities",
            "zh": "社区",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90023"
        },
        {
            "en": "diversity",
            "zh": "多样性",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90026"
        },
        {
            "en": "agriculture",
            "zh": "农业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90036"
        },
        {
            "en": "logging",
            "zh": "伐木",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90043"
        },
        {
            "en": "flooding",
            "zh": "洪水",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts19_t4_p4&sentence=90072"
        }
    ]
};
