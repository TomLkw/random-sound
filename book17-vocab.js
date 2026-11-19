// 剑雅 17 原文听写词表，每个 Test 40 词，每个 Part 10 词。
// 按常见听力场景、通用学术词汇和拼写练习价值选取，保留原文词形及定位链接。
const BOOK17_VOCABULARY = {
    "book17-t1": [
        {
            "en": "conservation",
            "zh": "保护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90003"
        },
        {
            "en": "litter",
            "zh": "垃圾",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90010"
        },
        {
            "en": "reserve",
            "zh": "保护区",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90020"
        },
        {
            "en": "habitats",
            "zh": "栖息地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90026"
        },
        {
            "en": "insects",
            "zh": "昆虫",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90028"
        },
        {
            "en": "biodiversity",
            "zh": "生物多样性",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90029"
        },
        {
            "en": "species",
            "zh": "物种",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90031"
        },
        {
            "en": "butterflies",
            "zh": "蝴蝶",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90031"
        },
        {
            "en": "waterproof",
            "zh": "防水的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90056"
        },
        {
            "en": "participants",
            "zh": "参与者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p1&sentence=90065"
        },
        {
            "en": "coastline",
            "zh": "海岸线",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90008"
        },
        {
            "en": "comfortable",
            "zh": "舒适的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90013"
        },
        {
            "en": "lighthouse",
            "zh": "灯塔",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90029"
        },
        {
            "en": "construction",
            "zh": "建造",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90033"
        },
        {
            "en": "council",
            "zh": "地方议会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90034"
        },
        {
            "en": "isolated",
            "zh": "偏远的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90035"
        },
        {
            "en": "workers",
            "zh": "工人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90039"
        },
        {
            "en": "predators",
            "zh": "捕食者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90049"
        },
        {
            "en": "dolphins",
            "zh": "海豚",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90051"
        },
        {
            "en": "formations",
            "zh": "地貌形态",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p2&sentence=90061"
        },
        {
            "en": "placement",
            "zh": "实习",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90005"
        },
        {
            "en": "livestock",
            "zh": "牲畜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90013"
        },
        {
            "en": "supplements",
            "zh": "补充剂",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90037"
        },
        {
            "en": "vitamins",
            "zh": "维生素",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90038"
        },
        {
            "en": "antibiotics",
            "zh": "抗生素",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90050"
        },
        {
            "en": "consumption",
            "zh": "食用",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90051"
        },
        {
            "en": "production",
            "zh": "生产",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90059"
        },
        {
            "en": "modules",
            "zh": "课程单元",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90065"
        },
        {
            "en": "nutrition",
            "zh": "营养",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90075"
        },
        {
            "en": "dissertation",
            "zh": "学位论文",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p3&sentence=90092"
        },
        {
            "en": "entrance",
            "zh": "入口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90006"
        },
        {
            "en": "pattern",
            "zh": "图案",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90017"
        },
        {
            "en": "spiritual",
            "zh": "精神的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90025"
        },
        {
            "en": "meditation",
            "zh": "冥想",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90028"
        },
        {
            "en": "cultures",
            "zh": "文化",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90028"
        },
        {
            "en": "ancient",
            "zh": "古代的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90033"
        },
        {
            "en": "emotional",
            "zh": "情绪的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90046"
        },
        {
            "en": "patients",
            "zh": "病人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90051"
        },
        {
            "en": "relaxation",
            "zh": "放松",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90061"
        },
        {
            "en": "anxiety",
            "zh": "焦虑",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t1_p4&sentence=90061"
        }
    ],
    "book17-t2": [
        {
            "en": "retired",
            "zh": "退休的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90004"
        },
        {
            "en": "volunteer",
            "zh": "志愿者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90005"
        },
        {
            "en": "library",
            "zh": "图书馆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90009"
        },
        {
            "en": "records",
            "zh": "记录",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90016"
        },
        {
            "en": "elderly",
            "zh": "老年人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90030"
        },
        {
            "en": "transport",
            "zh": "交通运输",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90033"
        },
        {
            "en": "hospital",
            "zh": "医院",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90047"
        },
        {
            "en": "appointment",
            "zh": "预约",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90049"
        },
        {
            "en": "refreshments",
            "zh": "茶点",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90072"
        },
        {
            "en": "tickets",
            "zh": "票",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p1&sentence=90082"
        },
        {
            "en": "estates",
            "zh": "庄园",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90002"
        },
        {
            "en": "gardens",
            "zh": "花园",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90006"
        },
        {
            "en": "ballroom",
            "zh": "舞厅",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90011"
        },
        {
            "en": "collection",
            "zh": "收藏品",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90018"
        },
        {
            "en": "paintings",
            "zh": "绘画作品",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90018"
        },
        {
            "en": "sculptures",
            "zh": "雕塑",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90018"
        },
        {
            "en": "servants",
            "zh": "仆人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90023"
        },
        {
            "en": "volunteers",
            "zh": "志愿者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90027"
        },
        {
            "en": "recipes",
            "zh": "食谱",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90029"
        },
        {
            "en": "playground",
            "zh": "游乐场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p2&sentence=90034"
        },
        {
            "en": "performances",
            "zh": "演出",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90001"
        },
        {
            "en": "assignment",
            "zh": "作业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90009"
        },
        {
            "en": "reviews",
            "zh": "评论",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90014"
        },
        {
            "en": "production",
            "zh": "戏剧制作",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90020"
        },
        {
            "en": "director",
            "zh": "导演",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90025"
        },
        {
            "en": "theatre",
            "zh": "剧院",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90029"
        },
        {
            "en": "lighting",
            "zh": "灯光",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90041"
        },
        {
            "en": "costumes",
            "zh": "戏服",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90046"
        },
        {
            "en": "musicians",
            "zh": "音乐家",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90050"
        },
        {
            "en": "translation",
            "zh": "翻译",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p3&sentence=90067"
        },
        {
            "en": "technology",
            "zh": "科技",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90006"
        },
        {
            "en": "vocabulary",
            "zh": "词汇",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90014"
        },
        {
            "en": "concepts",
            "zh": "概念",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90019"
        },
        {
            "en": "bilingual",
            "zh": "双语的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90034"
        },
        {
            "en": "generation",
            "zh": "一代人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90046"
        },
        {
            "en": "population",
            "zh": "人口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90050"
        },
        {
            "en": "grammar",
            "zh": "语法",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90051"
        },
        {
            "en": "government",
            "zh": "政府",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90054"
        },
        {
            "en": "education",
            "zh": "教育",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90060"
        },
        {
            "en": "identity",
            "zh": "身份认同",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t2_p4&sentence=90066"
        }
    ],
    "book17-t3": [
        {
            "en": "seaside",
            "zh": "海边",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90001"
        },
        {
            "en": "surfing",
            "zh": "冲浪",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90001"
        },
        {
            "en": "holiday",
            "zh": "假期",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90001"
        },
        {
            "en": "abilities",
            "zh": "能力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90008"
        },
        {
            "en": "demanding",
            "zh": "费力的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90011"
        },
        {
            "en": "locations",
            "zh": "地点",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90018"
        },
        {
            "en": "hostels",
            "zh": "青年旅舍",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90032"
        },
        {
            "en": "campsites",
            "zh": "露营地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90032"
        },
        {
            "en": "wetsuit",
            "zh": "潜水服",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90073"
        },
        {
            "en": "temperature",
            "zh": "温度",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p1&sentence=90067"
        },
        {
            "en": "childcare",
            "zh": "儿童照护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90003"
        },
        {
            "en": "insured",
            "zh": "投保的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90013"
        },
        {
            "en": "breakfast",
            "zh": "早餐",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90016"
        },
        {
            "en": "registered",
            "zh": "登记的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90017"
        },
        {
            "en": "allergies",
            "zh": "过敏症",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90034"
        },
        {
            "en": "alternative",
            "zh": "替代选择",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90035"
        },
        {
            "en": "library",
            "zh": "图书馆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90049"
        },
        {
            "en": "specialist",
            "zh": "专家",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90052"
        },
        {
            "en": "instrument",
            "zh": "乐器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90062"
        },
        {
            "en": "cooking",
            "zh": "烹饪",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p2&sentence=90074"
        },
        {
            "en": "placement",
            "zh": "实习",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90002"
        },
        {
            "en": "competition",
            "zh": "竞赛",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90007"
        },
        {
            "en": "stadium",
            "zh": "体育场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90006"
        },
        {
            "en": "equipment",
            "zh": "器材",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90015"
        },
        {
            "en": "responsibility",
            "zh": "责任",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90016"
        },
        {
            "en": "boundary",
            "zh": "边界",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90019"
        },
        {
            "en": "spectators",
            "zh": "观众",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90025"
        },
        {
            "en": "timetable",
            "zh": "时间表",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90035"
        },
        {
            "en": "sponsor",
            "zh": "赞助",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90050"
        },
        {
            "en": "leadership",
            "zh": "领导能力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p3&sentence=90074"
        },
        {
            "en": "migrate",
            "zh": "迁徙",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90001"
        },
        {
            "en": "habitats",
            "zh": "栖息地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90003"
        },
        {
            "en": "migration",
            "zh": "迁徙",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90006"
        },
        {
            "en": "observations",
            "zh": "观察记录",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90006"
        },
        {
            "en": "experiments",
            "zh": "实验",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90016"
        },
        {
            "en": "species",
            "zh": "物种",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90019"
        },
        {
            "en": "feathers",
            "zh": "羽毛",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90024"
        },
        {
            "en": "assumptions",
            "zh": "假设",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90027"
        },
        {
            "en": "evidence",
            "zh": "证据",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90041"
        },
        {
            "en": "destinations",
            "zh": "目的地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t3_p4&sentence=90045"
        }
    ],
    "book17-t4": [
        {
            "en": "apartment",
            "zh": "公寓",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90003"
        },
        {
            "en": "domestic",
            "zh": "家务的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90004"
        },
        {
            "en": "carpets",
            "zh": "地毯",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90012"
        },
        {
            "en": "ironing",
            "zh": "熨衣",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90024"
        },
        {
            "en": "microwave",
            "zh": "微波炉",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90028"
        },
        {
            "en": "curtains",
            "zh": "窗帘",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90035"
        },
        {
            "en": "balcony",
            "zh": "阳台",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90037"
        },
        {
            "en": "plumber",
            "zh": "管道工",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90043"
        },
        {
            "en": "electrician",
            "zh": "电工",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90045"
        },
        {
            "en": "references",
            "zh": "推荐证明",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p1&sentence=90058"
        },
        {
            "en": "turnover",
            "zh": "人员流动",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90002"
        },
        {
            "en": "training",
            "zh": "培训",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90010"
        },
        {
            "en": "recruit",
            "zh": "招聘",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90012"
        },
        {
            "en": "colleagues",
            "zh": "同事",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90016"
        },
        {
            "en": "shifts",
            "zh": "轮班",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90022"
        },
        {
            "en": "complaints",
            "zh": "投诉",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90030"
        },
        {
            "en": "feedback",
            "zh": "反馈",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90040"
        },
        {
            "en": "employees",
            "zh": "雇员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90045"
        },
        {
            "en": "childcare",
            "zh": "儿童照护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90058"
        },
        {
            "en": "vouchers",
            "zh": "代金券",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p2&sentence=90059"
        },
        {
            "en": "athlete",
            "zh": "运动员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90004"
        },
        {
            "en": "academic",
            "zh": "学业的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90011"
        },
        {
            "en": "university",
            "zh": "大学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90031"
        },
        {
            "en": "technology",
            "zh": "科技",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90035"
        },
        {
            "en": "equipment",
            "zh": "装备",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90040"
        },
        {
            "en": "rubber",
            "zh": "橡胶",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90042"
        },
        {
            "en": "helmet",
            "zh": "头盔",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90053"
        },
        {
            "en": "cyclists",
            "zh": "骑自行车的人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90064"
        },
        {
            "en": "leather",
            "zh": "皮革",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90082"
        },
        {
            "en": "manufactured",
            "zh": "制造的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p3&sentence=90078"
        },
        {
            "en": "ingredients",
            "zh": "原料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90013"
        },
        {
            "en": "alternative",
            "zh": "替代选择",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90014"
        },
        {
            "en": "fertilizer",
            "zh": "肥料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90018"
        },
        {
            "en": "moisture",
            "zh": "水分",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90018"
        },
        {
            "en": "soil",
            "zh": "土壤",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90018"
        },
        {
            "en": "climate",
            "zh": "气候",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90026"
        },
        {
            "en": "containers",
            "zh": "容器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90034"
        },
        {
            "en": "diameter",
            "zh": "直径",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90045"
        },
        {
            "en": "nutrients",
            "zh": "养分",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90063"
        },
        {
            "en": "evaporation",
            "zh": "蒸发",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts17_t4_p4&sentence=90070"
        }
    ]
};
