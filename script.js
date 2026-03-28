// 会話ネタデータベース
const topics = {
    deep: [
        "最近ハマっていることは何ですか？",
        "今の仕事・学校で一番やりがいを感じることは？",
        "将来、実現したい夢や目標は？",
        "人生で一番大切なものは何だと思いますか？",
        "最近、心が動いた瞬間はありましたか？",
        "尊敬している人は誰ですか？そしてなぜ？",
        "人間関係で大切にしていることは？",
        "今までで一番笑った経験は？",
        "苦手だけど、挑戦したいことは何？",
        "もし時間が無限にあったら、何をしたいですか？",
        "自分の長所は何だと思いますか？",
        "最近、勉強になったことは何ですか？",
        "人生で一番後悔していることは何ですか？",
        "今、一番欲しいものは何ですか？（物質的じゃなくても）",
        "自分を一言で表すなら？",
        "10年後の自分はどうなっていたいですか？",
        "影響を受けた映画や本はありますか？",
        "ストレスを解消する方法は何ですか？",
        "人生で一番大きな決断は何ですか？",
        "今、どんなことで悩んでいますか？",
        "毎日を充実させるために心がけていることは？",
        "人生で学んだ一番大事な教訓は？",
        "もし人生をやり直せたら、何を変えたいですか？",
        "幸せって何だと思いますか？",
        "今、心が満たされていると感じる瞬間は？"
    ],
    fun: [
        "最近、テレビで見た面白い番組は？",
        "好きな映画やドラマジャンルは？",
        "得意な料理は何ですか？",
        "今、はまっているゲームはありますか？",
        "もし動物に変身できたら、何になりたい？",
        "好きな食べ物は何ですか？理由も聞きたい！",
        "友達の中で一番面白いエピソードは？",
        "旅行で行きたい場所は？",
        "もし100万円もらったら何を買う？",
        "一番好きな季節は何ですか？",
        "週末は何をして過ごすことが多いですか？",
        "朝派？夜派？",
        "猫派？犬派？",
        "好きなアーティスト・音楽は？",
        "最近笑った話を一つ教えてください！",
        "最近買ってよかったものBEST3は何ですか？",
        "子どもの頃、好きだったアニメやキャラは？",
        "SNSで何をよく発信しますか？",
        "得意な方言や言葉遣いはありますか？",
        "昔ハマっていたことは今もハマってますか？",
        "推しのアイドルやキャラはいますか？",
        "得意なカラオケの曲は何ですか？",
        "今年の目標は何ですか？",
        "一番好きなコンビニは？その理由は？",
        "最後に笑った漫画やネットの画像は？",
        "朝ごはんと夜ご飯、どっちが大事ですか？"
    ],
    icebreaker: [
        "今日は仕事・学校どうでしたか？",
        "朝食は何を食べました？",
        "最近睡眠は十分に取れていますか？",
        "得意なスポーツはありますか？",
        "子どもの頃、何になりたかった？",
        "実は、○○が得意なんです。知ってた？",
        "最近、新しく始めたことがあります",
        "得意な言語は日本語以外にありますか？",
        "今、何が欲しいですか？",
        "好きな色は何ですか？",
        "最近、気になるニュースはありますか？",
        "ファッションで意識していることは？",
        "普段、どんなSNS使ってます？",
        "最近買った物で気に入っているものは？",
        "平日と休日、どちらが好きですか？",
        "今朝は何時に起きましたか？",
        "最近、新しく挑戦したことはありますか？",
        "生まれはどこですか？長く住んでいますか？",
        "朝はコーヒー派？紅茶派？",
        "今日の天気、どう思いますか？",
        "最近、運動していますか？",
        "好きな季節の話を一つ聞きたい！",
        "最近焦ったことはありますか？",
        "今夜は何を食べる予定ですか？",
        "この一週間で一番良かったことは？",
        "週末の予定は立ててますか？"
    ]
};

let history = [];

// ページロード時の処理
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const retryBtn = document.getElementById('retryBtn');

    generateBtn.addEventListener('click', generateTopic);
    retryBtn.addEventListener('click', generateTopic);
});

// 質問を生成する関数
function generateTopic() {
    const topicDisplay = document.getElementById('topicDisplay');
    const generateBtn = document.getElementById('generateBtn');
    const retryBtn = document.getElementById('retryBtn');
    const categoryCheckboxes = document.querySelectorAll('.category-filter input[type="checkbox"]:checked');

    // 選択されたカテゴリーを取得
    const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);

    if (selectedCategories.length === 0) {
        alert('少なくとも1つのカテゴリーを選択してください！');
        return;
    }

    // 選択されたカテゴリーの質問を集約
    const availableTopics = [];
    selectedCategories.forEach(category => {
        if (topics[category]) {
            availableTopics.push(...topics[category]);
        }
    });

    // ランダムに1つ選択
    const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];

    // 表示を更新
    topicDisplay.innerHTML = `<strong>${randomTopic}</strong>`;
    topicDisplay.classList.add('active');

    // ボタンの表示・非表示を切り替え
    generateBtn.style.display = 'none';
    retryBtn.style.display = 'block';

    // 履歴に追加
    addToHistory(randomTopic);
}

// 履歴に追加する関数
function addToHistory(topic) {
    history.unshift(topic); // 前に追加
    if (history.length > 10) {
        history.pop(); // 10個を超えたら古いものを削除
    }

    updateHistoryDisplay();
}

// 履歴表示を更新する関数
function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-message">まだ質問がありません</p>';
        return;
    }

    historyList.innerHTML = '';
    history.forEach((topic, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = `${index + 1}. ${topic}`;
        historyList.appendChild(historyItem);
    });
}
