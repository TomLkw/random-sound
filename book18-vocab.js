// 剑雅 18 原文听写词表，每个 Test 40 词，每个 Part 10 词。
// 按常见听力场景、通用学术词汇和拼写练习价值选取，保留原文词形及定位链接。
const BOOK18_VOCABULARY = {
    "book18-t1": [
        {
            "en": "survey",
            "zh": "调查",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90003"
        },
        {
            "en": "transport",
            "zh": "交通运输",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90003"
        },
        {
            "en": "postcode",
            "zh": "邮政编码",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90012"
        },
        {
            "en": "dentist",
            "zh": "牙医",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90031"
        },
        {
            "en": "parking",
            "zh": "停车",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90039"
        },
        {
            "en": "convenient",
            "zh": "方便的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90042"
        },
        {
            "en": "journey",
            "zh": "旅程",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90045"
        },
        {
            "en": "timetable",
            "zh": "时刻表",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90055"
        },
        {
            "en": "pollution",
            "zh": "污染",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90071"
        },
        {
            "en": "storage",
            "zh": "存放",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p1&sentence=90075"
        },
        {
            "en": "voluntary",
            "zh": "志愿的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90002"
        },
        {
            "en": "organisation",
            "zh": "组织",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90002"
        },
        {
            "en": "volunteers",
            "zh": "志愿者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90004"
        },
        {
            "en": "reliability",
            "zh": "可靠性",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90012"
        },
        {
            "en": "training",
            "zh": "培训",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90014"
        },
        {
            "en": "experience",
            "zh": "经验",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90013"
        },
        {
            "en": "income",
            "zh": "收入",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90025"
        },
        {
            "en": "creativity",
            "zh": "创造力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90033"
        },
        {
            "en": "nutrition",
            "zh": "营养",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90042"
        },
        {
            "en": "disabled",
            "zh": "残障的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p2&sentence=90044"
        },
        {
            "en": "fashion",
            "zh": "时尚",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90018"
        },
        {
            "en": "journalism",
            "zh": "新闻业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90018"
        },
        {
            "en": "career",
            "zh": "职业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90019"
        },
        {
            "en": "industry",
            "zh": "行业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90024"
        },
        {
            "en": "education",
            "zh": "教育",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90030"
        },
        {
            "en": "assistants",
            "zh": "助理",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90042"
        },
        {
            "en": "financial",
            "zh": "财务的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90056"
        },
        {
            "en": "client",
            "zh": "客户",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90061"
        },
        {
            "en": "manufacturers",
            "zh": "制造商",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90069"
        },
        {
            "en": "consumers",
            "zh": "消费者",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p3&sentence=90071"
        },
        {
            "en": "population",
            "zh": "种群数量",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90008"
        },
        {
            "en": "competition",
            "zh": "竞争",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90016"
        },
        {
            "en": "hunger",
            "zh": "饥饿",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90017"
        },
        {
            "en": "fences",
            "zh": "围栏",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90020"
        },
        {
            "en": "helicopters",
            "zh": "直升机",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90031"
        },
        {
            "en": "measurements",
            "zh": "测量数据",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90052"
        },
        {
            "en": "employment",
            "zh": "就业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90060"
        },
        {
            "en": "community",
            "zh": "社区",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90061"
        },
        {
            "en": "conservation",
            "zh": "保护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90070"
        },
        {
            "en": "tourism",
            "zh": "旅游业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t1_p4&sentence=90071"
        }
    ],
    "book18-t2": [
        {
            "en": "restaurant",
            "zh": "餐厅",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90001"
        },
        {
            "en": "references",
            "zh": "推荐证明",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90002"
        },
        {
            "en": "vacancies",
            "zh": "职位空缺",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90004"
        },
        {
            "en": "uniforms",
            "zh": "制服",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90012"
        },
        {
            "en": "discount",
            "zh": "折扣",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90016"
        },
        {
            "en": "requirements",
            "zh": "要求",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90027"
        },
        {
            "en": "communication",
            "zh": "沟通",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90039"
        },
        {
            "en": "certificate",
            "zh": "证书",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90040"
        },
        {
            "en": "supervisor",
            "zh": "主管",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90049"
        },
        {
            "en": "salary",
            "zh": "薪水",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p1&sentence=90055"
        },
        {
            "en": "housing",
            "zh": "住房",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90003"
        },
        {
            "en": "development",
            "zh": "开发",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90003"
        },
        {
            "en": "airport",
            "zh": "机场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90012"
        },
        {
            "en": "hospital",
            "zh": "医院",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90015"
        },
        {
            "en": "accommodation",
            "zh": "住宿",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90021"
        },
        {
            "en": "landscape",
            "zh": "景观",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90025"
        },
        {
            "en": "wildlife",
            "zh": "野生动物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90026"
        },
        {
            "en": "facilities",
            "zh": "设施",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90027"
        },
        {
            "en": "clinic",
            "zh": "诊所",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90043"
        },
        {
            "en": "playground",
            "zh": "游乐场",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p2&sentence=90054"
        },
        {
            "en": "presentation",
            "zh": "展示报告",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90001"
        },
        {
            "en": "sources",
            "zh": "资料来源",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90012"
        },
        {
            "en": "volcano",
            "zh": "火山",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90013"
        },
        {
            "en": "consequences",
            "zh": "后果",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90010"
        },
        {
            "en": "observations",
            "zh": "观察记录",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90020"
        },
        {
            "en": "weather",
            "zh": "天气",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90024"
        },
        {
            "en": "livestock",
            "zh": "牲畜",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90063"
        },
        {
            "en": "vegetation",
            "zh": "植被",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90064"
        },
        {
            "en": "drought",
            "zh": "干旱",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90067"
        },
        {
            "en": "famine",
            "zh": "饥荒",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p3&sentence=90071"
        },
        {
            "en": "clothing",
            "zh": "衣物",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90002"
        },
        {
            "en": "pockets",
            "zh": "口袋",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90004"
        },
        {
            "en": "trousers",
            "zh": "裤子",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90018"
        },
        {
            "en": "garments",
            "zh": "服装",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90020"
        },
        {
            "en": "material",
            "zh": "材料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90020"
        },
        {
            "en": "lining",
            "zh": "衬里",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90023"
        },
        {
            "en": "fabric",
            "zh": "布料",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90035"
        },
        {
            "en": "recycled",
            "zh": "回收利用的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90036"
        },
        {
            "en": "embroidery",
            "zh": "刺绣",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90038"
        },
        {
            "en": "perfume",
            "zh": "香水",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t2_p4&sentence=90043"
        }
    ],
    "book18-t3": [
        {
            "en": "application",
            "zh": "申请",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90004"
        },
        {
            "en": "membership",
            "zh": "会员资格",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90036"
        },
        {
            "en": "photography",
            "zh": "摄影",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90046"
        },
        {
            "en": "competitions",
            "zh": "竞赛",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90030"
        },
        {
            "en": "feedback",
            "zh": "反馈",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90056"
        },
        {
            "en": "composition",
            "zh": "构图",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90059"
        },
        {
            "en": "instructions",
            "zh": "说明",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90067"
        },
        {
            "en": "timing",
            "zh": "时机",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90073"
        },
        {
            "en": "subject",
            "zh": "拍摄对象",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90076"
        },
        {
            "en": "movements",
            "zh": "动作",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p1&sentence=90081"
        },
        {
            "en": "safety",
            "zh": "安全",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90005"
        },
        {
            "en": "poisonous",
            "zh": "有毒的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90006"
        },
        {
            "en": "edible",
            "zh": "可食用的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90012"
        },
        {
            "en": "cooked",
            "zh": "煮熟的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90021"
        },
        {
            "en": "habitats",
            "zh": "栖息地",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90029"
        },
        {
            "en": "expert",
            "zh": "专家",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90040"
        },
        {
            "en": "conservation",
            "zh": "保护",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90042"
        },
        {
            "en": "endangered",
            "zh": "濒危的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90047"
        },
        {
            "en": "restaurants",
            "zh": "餐厅",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90049"
        },
        {
            "en": "fridge",
            "zh": "冰箱",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p2&sentence=90055"
        },
        {
            "en": "automation",
            "zh": "自动化",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90001"
        },
        {
            "en": "workers",
            "zh": "工人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90007"
        },
        {
            "en": "textile",
            "zh": "纺织的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90007"
        },
        {
            "en": "machines",
            "zh": "机器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90009"
        },
        {
            "en": "unemployment",
            "zh": "失业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90025"
        },
        {
            "en": "technology",
            "zh": "科技",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90032"
        },
        {
            "en": "accountants",
            "zh": "会计师",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90035"
        },
        {
            "en": "efficient",
            "zh": "高效的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90038"
        },
        {
            "en": "graduates",
            "zh": "大学毕业生",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90053"
        },
        {
            "en": "agricultural",
            "zh": "农业的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p3&sentence=90054"
        },
        {
            "en": "satellites",
            "zh": "卫星",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90002"
        },
        {
            "en": "objects",
            "zh": "物体",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90003"
        },
        {
            "en": "management",
            "zh": "管理",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90004"
        },
        {
            "en": "collisions",
            "zh": "碰撞",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90009"
        },
        {
            "en": "technical",
            "zh": "技术的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90012"
        },
        {
            "en": "tracking",
            "zh": "追踪",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90029"
        },
        {
            "en": "sensors",
            "zh": "传感器",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90045"
        },
        {
            "en": "prediction",
            "zh": "预测",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90046"
        },
        {
            "en": "database",
            "zh": "数据库",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90058"
        },
        {
            "en": "congestion",
            "zh": "拥堵",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t3_p4&sentence=90060"
        }
    ],
    "book18-t4": [
        {
            "en": "employment",
            "zh": "就业",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90004"
        },
        {
            "en": "receptionist",
            "zh": "接待员",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90009"
        },
        {
            "en": "patients",
            "zh": "病人",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90024"
        },
        {
            "en": "appointments",
            "zh": "预约",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90026"
        },
        {
            "en": "database",
            "zh": "数据库",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90030"
        },
        {
            "en": "administrative",
            "zh": "行政的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90031"
        },
        {
            "en": "permanent",
            "zh": "长期的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90053"
        },
        {
            "en": "contract",
            "zh": "合同",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90054"
        },
        {
            "en": "references",
            "zh": "推荐证明",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90075"
        },
        {
            "en": "interview",
            "zh": "面试",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p1&sentence=90077"
        },
        {
            "en": "museum",
            "zh": "博物馆",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90001"
        },
        {
            "en": "entrance",
            "zh": "入口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90005"
        },
        {
            "en": "residence",
            "zh": "住所",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90008"
        },
        {
            "en": "collections",
            "zh": "藏品",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90010"
        },
        {
            "en": "galleries",
            "zh": "展厅",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90019"
        },
        {
            "en": "exhibitions",
            "zh": "展览",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90019"
        },
        {
            "en": "donation",
            "zh": "捐款",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90022"
        },
        {
            "en": "cloakroom",
            "zh": "衣帽间",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90024"
        },
        {
            "en": "photography",
            "zh": "摄影",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90026"
        },
        {
            "en": "equipment",
            "zh": "设备",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p2&sentence=90041"
        },
        {
            "en": "educational",
            "zh": "教育的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90002"
        },
        {
            "en": "skills",
            "zh": "技能",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90007"
        },
        {
            "en": "teamwork",
            "zh": "团队合作",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90014"
        },
        {
            "en": "challenge",
            "zh": "挑战",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90015"
        },
        {
            "en": "concentrating",
            "zh": "集中注意力",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90029"
        },
        {
            "en": "difficulty",
            "zh": "难度",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90043"
        },
        {
            "en": "examples",
            "zh": "示例",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90053"
        },
        {
            "en": "verbal",
            "zh": "口头的",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90059"
        },
        {
            "en": "fractions",
            "zh": "分数",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90072"
        },
        {
            "en": "symmetry",
            "zh": "对称",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p3&sentence=90074"
        },
        {
            "en": "writer",
            "zh": "作家",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90001"
        },
        {
            "en": "literature",
            "zh": "文学",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90014"
        },
        {
            "en": "poverty",
            "zh": "贫困",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90017"
        },
        {
            "en": "education",
            "zh": "教育",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90019"
        },
        {
            "en": "criticism",
            "zh": "批评",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90020"
        },
        {
            "en": "poetry",
            "zh": "诗歌",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90030"
        },
        {
            "en": "portraits",
            "zh": "肖像画",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90039"
        },
        {
            "en": "furniture",
            "zh": "家具",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90044"
        },
        {
            "en": "library",
            "zh": "书房",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90055"
        },
        {
            "en": "harbour",
            "zh": "港口",
            "sentenceUrl": "https://hear-write.com/hearing?part=ielts18_t4_p4&sentence=90060"
        }
    ]
};
