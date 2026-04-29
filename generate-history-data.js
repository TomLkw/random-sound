// 在浏览器控制台运行此脚本，生成测试数据

// 生成昨天的日期
function getYesterdayDateKey() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
}

// 生成前天的日期
function getDayBeforeYesterdayDateKey() {
    const dayBefore = new Date();
    dayBefore.setDate(dayBefore.getDate() - 2);
    return `${dayBefore.getFullYear()}-${String(dayBefore.getMonth() + 1).padStart(2, '0')}-${String(dayBefore.getDate()).padStart(2, '0')}`;
}

// 生成3天前的日期
function getThreeDaysAgoDateKey() {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    return `${threeDaysAgo.getFullYear()}-${String(threeDaysAgo.getMonth() + 1).padStart(2, '0')}-${String(threeDaysAgo.getDate()).padStart(2, '0')}`;
}

// 测试单词数据
const testWords = [
    { en: "apple", zh: "苹果" },
    { en: "banana", zh: "香蕉" },
    { en: "orange", zh: "橙子" },
    { en: "grape", zh: "葡萄" },
    { en: "watermelon", zh: "西瓜" },
    { en: "strawberry", zh: "草莓" },
    { en: "pineapple", zh: "菠萝" },
    { en: "mango", zh: "芒果" },
    { en: "peach", zh: "桃子" },
    { en: "pear", zh: "梨" },
    { en: "cherry", zh: "樱桃" },
    { en: "lemon", zh: "柠檬" },
    { en: "coconut", zh: "椰子" },
    { en: "kiwi", zh: "猕猴桃" },
    { en: "blueberry", zh: "蓝莓" },
    { en: "cat", zh: "猫" },
    { en: "dog", zh: "狗" },
    { en: "bird", zh: "鸟" },
    { en: "fish", zh: "鱼" },
    { en: "rabbit", zh: "兔子" },
    { en: "elephant", zh: "大象" },
    { en: "tiger", zh: "老虎" },
    { en: "lion", zh: "狮子" },
    { en: "monkey", zh: "猴子" },
    { en: "panda", zh: "熊猫" },
    { en: "book", zh: "书" },
    { en: "pen", zh: "笔" },
    { en: "desk", zh: "桌子" },
    { en: "chair", zh: "椅子" },
    { en: "computer", zh: "电脑" },
    { en: "phone", zh: "手机" },
    { en: "car", zh: "汽车" },
    { en: "bicycle", zh: "自行车" },
    { en: "house", zh: "房子" },
    { en: "tree", zh: "树" },
    { en: "flower", zh: "花" },
    { en: "sun", zh: "太阳" },
    { en: "moon", zh: "月亮" },
    { en: "star", zh: "星星" },
    { en: "water", zh: "水" }
];

// 生成随机时间戳（某一天的不同时间）
function generateTimestamp(dateKey, index, total) {
    const [year, month, day] = dateKey.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    // 在9:00到21:00之间均匀分布
    const startHour = 9;
    const endHour = 21;
    const totalMinutes = (endHour - startHour) * 60;
    const minutePerWord = totalMinutes / total;
    const minutes = startHour * 60 + (index * minutePerWord);
    
    date.setHours(Math.floor(minutes / 60));
    date.setMinutes(Math.floor(minutes % 60));
    date.setSeconds(Math.floor(Math.random() * 60));
    
    return date.toISOString();
}

// 生成某一天的学习数据
function generateDayData(dateKey, wordCount) {
    const selectedWords = testWords.slice(0, wordCount);
    const words = selectedWords.map((word, index) => ({
        en: word.en,
        zh: word.zh,
        timestamp: generateTimestamp(dateKey, index, wordCount)
    }));
    
    return {
        date: dateKey,
        correctCount: wordCount,
        words: words
    };
}

// 生成历史数据
function generateHistoryData() {
    const history = [];
    
    // 昨天：15个单词
    history.push(generateDayData(getYesterdayDateKey(), 15));
    
    // 前天：22个单词
    history.push(generateDayData(getDayBeforeYesterdayDateKey(), 22));
    
    // 3天前：18个单词
    history.push(generateDayData(getThreeDaysAgoDateKey(), 18));
    
    return history;
}

// 执行生成
console.log('🚀 开始生成测试数据...');

const historyData = generateHistoryData();
localStorage.setItem('learningHistory', JSON.stringify(historyData));

console.log('✅ 测试数据生成成功！');
console.log('📊 生成的历史记录：');
historyData.forEach(day => {
    console.log(`  📅 ${day.date}: ${day.correctCount} 个单词`);
});

console.log('\n💡 现在你可以：');
console.log('  1. 点击侧边栏的"今日学习统计"按钮');
console.log('  2. 在弹窗中点击"历史记录"按钮');
console.log('  3. 查看生成的历史数据');

// 返回数据供查看
historyData;
