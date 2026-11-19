// 剑雅 16 原文听写词表，每个 Test 40 词，每个 Part 10 词。
// 按常见听力场景、通用学术词汇和拼写练习价值选取，保留原文词形及定位链接。
const BOOK16_VOCABULARY = {
    "book16-t1": [
        {
            "en": "workshops",
            "zh": "工作坊",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90001"
        },
        {
            "en": "engineering",
            "zh": "工程学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90001"
        },
        {
            "en": "competition",
            "zh": "竞赛",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90018"
        },
        {
            "en": "balloon",
            "zh": "气球",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90022"
        },
        {
            "en": "vehicles",
            "zh": "车辆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90032"
        },
        {
            "en": "materials",
            "zh": "材料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90044"
        },
        {
            "en": "recycled",
            "zh": "回收利用的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90044"
        },
        {
            "en": "software",
            "zh": "软件",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90050"
        },
        {
            "en": "location",
            "zh": "地点",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90067"
        },
        {
            "en": "parking",
            "zh": "停车",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p1&sentence=90077"
        },
        {
            "en": "manufacturers",
            "zh": "制造商",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90002"
        },
        {
            "en": "apprenticeship",
            "zh": "学徒培训",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90009"
        },
        {
            "en": "components",
            "zh": "零部件",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90012"
        },
        {
            "en": "production",
            "zh": "生产",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90016"
        },
        {
            "en": "premises",
            "zh": "经营场所",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90020"
        },
        {
            "en": "refurbishment",
            "zh": "翻新",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90024"
        },
        {
            "en": "reception",
            "zh": "接待处",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90036"
        },
        {
            "en": "corridor",
            "zh": "走廊",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90038"
        },
        {
            "en": "warehouse",
            "zh": "仓库",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90044"
        },
        {
            "en": "canteen",
            "zh": "食堂",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p2&sentence=90048"
        },
        {
            "en": "project",
            "zh": "项目",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90001"
        },
        {
            "en": "wildlife",
            "zh": "野生动物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90004"
        },
        {
            "en": "handouts",
            "zh": "讲义",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90008"
        },
        {
            "en": "texture",
            "zh": "质感",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90012"
        },
        {
            "en": "evolution",
            "zh": "进化",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90017"
        },
        {
            "en": "proposal",
            "zh": "提案",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90023"
        },
        {
            "en": "timeline",
            "zh": "时间表",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90031"
        },
        {
            "en": "presentation",
            "zh": "展示报告",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90040"
        },
        {
            "en": "outcome",
            "zh": "成果",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90041"
        },
        {
            "en": "reference",
            "zh": "提及；参考",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p3&sentence=90077"
        },
        {
            "en": "philosophy",
            "zh": "哲学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90001"
        },
        {
            "en": "publication",
            "zh": "出版",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90012"
        },
        {
            "en": "principles",
            "zh": "原则",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90017"
        },
        {
            "en": "emotions",
            "zh": "情绪",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90019"
        },
        {
            "en": "perspective",
            "zh": "视角",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90025"
        },
        {
            "en": "theories",
            "zh": "理论",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90040"
        },
        {
            "en": "influence",
            "zh": "影响",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90049"
        },
        {
            "en": "therapy",
            "zh": "疗法",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90050"
        },
        {
            "en": "depression",
            "zh": "抑郁症",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90052"
        },
        {
            "en": "symptoms",
            "zh": "症状",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t1_p4&sentence=90054"
        }
    ],
    "book16-t2": [
        {
            "en": "advertisement",
            "zh": "广告",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90003"
        },
        {
            "en": "digital",
            "zh": "数字的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90008"
        },
        {
            "en": "restrictions",
            "zh": "限制",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90012"
        },
        {
            "en": "maximum",
            "zh": "最大值",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90013"
        },
        {
            "en": "minimum",
            "zh": "最小值",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90015"
        },
        {
            "en": "frame",
            "zh": "相框",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90017"
        },
        {
            "en": "album",
            "zh": "相册",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90021"
        },
        {
            "en": "parcel",
            "zh": "包裹",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90033"
        },
        {
            "en": "folder",
            "zh": "文件夹",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90040"
        },
        {
            "en": "background",
            "zh": "背景",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p1&sentence=90056"
        },
        {
            "en": "council",
            "zh": "地方议会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90009"
        },
        {
            "en": "population",
            "zh": "人口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90012"
        },
        {
            "en": "permission",
            "zh": "许可",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90015"
        },
        {
            "en": "development",
            "zh": "开发",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90015"
        },
        {
            "en": "catering",
            "zh": "餐饮服务",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90019"
        },
        {
            "en": "facilities",
            "zh": "设施",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90019"
        },
        {
            "en": "capacity",
            "zh": "容纳量",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90021"
        },
        {
            "en": "payment",
            "zh": "付款",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90035"
        },
        {
            "en": "storage",
            "zh": "存放",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90039"
        },
        {
            "en": "performance",
            "zh": "表演",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p2&sentence=90063"
        },
        {
            "en": "psychology",
            "zh": "心理学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90001"
        },
        {
            "en": "assignment",
            "zh": "作业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90001"
        },
        {
            "en": "memories",
            "zh": "记忆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90009"
        },
        {
            "en": "experiment",
            "zh": "实验",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90032"
        },
        {
            "en": "methodology",
            "zh": "研究方法",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90034"
        },
        {
            "en": "assessment",
            "zh": "评估",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90042"
        },
        {
            "en": "statistical",
            "zh": "统计的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90043"
        },
        {
            "en": "observation",
            "zh": "观察",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90062"
        },
        {
            "en": "correlation",
            "zh": "相关性",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90080"
        },
        {
            "en": "variables",
            "zh": "变量",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p3&sentence=90080"
        },
        {
            "en": "exercise",
            "zh": "锻炼",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90005"
        },
        {
            "en": "anxiety",
            "zh": "焦虑",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90007"
        },
        {
            "en": "cognitive",
            "zh": "认知的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90019"
        },
        {
            "en": "creativity",
            "zh": "创造力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90020"
        },
        {
            "en": "fitness",
            "zh": "体能",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90030"
        },
        {
            "en": "balance",
            "zh": "平衡",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90036"
        },
        {
            "en": "concentration",
            "zh": "专注力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90040"
        },
        {
            "en": "motivation",
            "zh": "动力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90047"
        },
        {
            "en": "interaction",
            "zh": "互动",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90051"
        },
        {
            "en": "calories",
            "zh": "卡路里",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t2_p4&sentence=90060"
        }
    ],
    "book16-t3": [
        {
            "en": "cycling",
            "zh": "骑自行车",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90007"
        },
        {
            "en": "instructors",
            "zh": "教练",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90018"
        },
        {
            "en": "supervisors",
            "zh": "监督人员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90020"
        },
        {
            "en": "responsible",
            "zh": "负责的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90024"
        },
        {
            "en": "reference",
            "zh": "推荐证明",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90027"
        },
        {
            "en": "waterproofs",
            "zh": "防水衣物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90048"
        },
        {
            "en": "sandals",
            "zh": "凉鞋",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90055"
        },
        {
            "en": "medication",
            "zh": "药物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90057"
        },
        {
            "en": "training",
            "zh": "训练",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90012"
        },
        {
            "en": "traffic",
            "zh": "交通",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p1&sentence=90016"
        },
        {
            "en": "recruitment",
            "zh": "招聘",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90003"
        },
        {
            "en": "agriculture",
            "zh": "农业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90004"
        },
        {
            "en": "maintenance",
            "zh": "维护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90005"
        },
        {
            "en": "opportunities",
            "zh": "机会",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90006"
        },
        {
            "en": "responsibilities",
            "zh": "职责",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90008"
        },
        {
            "en": "salaries",
            "zh": "薪水",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90016"
        },
        {
            "en": "overseas",
            "zh": "在海外",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90018"
        },
        {
            "en": "environment",
            "zh": "环境",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90027"
        },
        {
            "en": "experience",
            "zh": "经验",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90031"
        },
        {
            "en": "licence",
            "zh": "执照",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p2&sentence=90055"
        },
        {
            "en": "obesity",
            "zh": "肥胖",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90001"
        },
        {
            "en": "experiment",
            "zh": "实验",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90003"
        },
        {
            "en": "content",
            "zh": "含量",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90013"
        },
        {
            "en": "nutritional",
            "zh": "营养的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90014"
        },
        {
            "en": "accurate",
            "zh": "准确的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90014"
        },
        {
            "en": "manufacturers",
            "zh": "制造商",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90029"
        },
        {
            "en": "calorie",
            "zh": "卡路里",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90027"
        },
        {
            "en": "guidelines",
            "zh": "指导建议",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90040"
        },
        {
            "en": "sensors",
            "zh": "传感器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90043"
        },
        {
            "en": "nutrition",
            "zh": "营养",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p3&sentence=90060"
        },
        {
            "en": "knitting",
            "zh": "编织",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90003"
        },
        {
            "en": "garments",
            "zh": "服装",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90004"
        },
        {
            "en": "clothing",
            "zh": "衣物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90014"
        },
        {
            "en": "equipment",
            "zh": "设备",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90021"
        },
        {
            "en": "economic",
            "zh": "经济的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90030"
        },
        {
            "en": "financial",
            "zh": "财务的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90035"
        },
        {
            "en": "needles",
            "zh": "针",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90049"
        },
        {
            "en": "patterns",
            "zh": "图案",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90050"
        },
        {
            "en": "materials",
            "zh": "材料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90053"
        },
        {
            "en": "communities",
            "zh": "社区",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t3_p4&sentence=90071"
        }
    ],
    "book16-t4": [
        {
            "en": "accommodation",
            "zh": "住宿",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90023"
        },
        {
            "en": "cottage",
            "zh": "乡间小屋",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90003"
        },
        {
            "en": "bedroom",
            "zh": "卧室",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90040"
        },
        {
            "en": "kitchen",
            "zh": "厨房",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90053"
        },
        {
            "en": "freezer",
            "zh": "冰柜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90053"
        },
        {
            "en": "electric",
            "zh": "电的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90054"
        },
        {
            "en": "bathroom",
            "zh": "浴室",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90058"
        },
        {
            "en": "heating",
            "zh": "供暖",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90064"
        },
        {
            "en": "deposit",
            "zh": "押金",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90083"
        },
        {
            "en": "booking",
            "zh": "预订",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p1&sentence=90084"
        },
        {
            "en": "transport",
            "zh": "交通运输",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90005"
        },
        {
            "en": "complaints",
            "zh": "投诉",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90007"
        },
        {
            "en": "vehicles",
            "zh": "车辆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90008"
        },
        {
            "en": "commuters",
            "zh": "通勤者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90010"
        },
        {
            "en": "cyclists",
            "zh": "骑自行车的人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90014"
        },
        {
            "en": "pedestrians",
            "zh": "行人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90014"
        },
        {
            "en": "pavement",
            "zh": "人行道",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90032"
        },
        {
            "en": "railings",
            "zh": "栏杆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90034"
        },
        {
            "en": "entrance",
            "zh": "入口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90043"
        },
        {
            "en": "playground",
            "zh": "游乐场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p2&sentence=90054"
        },
        {
            "en": "schemes",
            "zh": "计划",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90001"
        },
        {
            "en": "convenient",
            "zh": "方便的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90008"
        },
        {
            "en": "benefits",
            "zh": "益处",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90004"
        },
        {
            "en": "incomes",
            "zh": "收入",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90010"
        },
        {
            "en": "emissions",
            "zh": "排放",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90017"
        },
        {
            "en": "pollution",
            "zh": "污染",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90017"
        },
        {
            "en": "recommendations",
            "zh": "建议",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90026"
        },
        {
            "en": "technical",
            "zh": "技术的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90032"
        },
        {
            "en": "payments",
            "zh": "付款",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90034"
        },
        {
            "en": "competition",
            "zh": "竞争",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p3&sentence=90038"
        },
        {
            "en": "extinction",
            "zh": "灭绝",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90001"
        },
        {
            "en": "ability",
            "zh": "能力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90008"
        },
        {
            "en": "creature",
            "zh": "生物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90073"
        },
        {
            "en": "skeleton",
            "zh": "骨架",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90037"
        },
        {
            "en": "scientific",
            "zh": "科学的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90038"
        },
        {
            "en": "research",
            "zh": "研究",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90038"
        },
        {
            "en": "intelligence",
            "zh": "智力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90051"
        },
        {
            "en": "vegetation",
            "zh": "植被",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90061"
        },
        {
            "en": "species",
            "zh": "物种",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90068"
        },
        {
            "en": "agriculture",
            "zh": "农业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts16_t4_p4&sentence=90085"
        }
    ]
};
