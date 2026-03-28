# 🎉 会話ネタジェネレーター - Conversation Starter

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Static](https://img.shields.io/badge/type-Static%20Site-lightgrey)
![Responsive](https://img.shields.io/badge/responsive-Yes-success)

飲み会や宅のみで話題に困ったときの救世主！🍻  
ボタンを押すだけでランダムに会話ネタが出てくるサイト

[🌐 ライブデモを見る](https://mikosun.github.io/MedachitaGirl/) • [デモ](#使い方) • [インストール](#インストール) • [カスタマイズ](#カスタマイズ) • [FAQ](#よくある質問)

</div>

---

## 🌍 Live Demo (ライブデモ)

### **[✨ ここをクリックしてデモを開く ✨](https://mikosun.github.io/MedachitaGirl/)**

すぐに試せます！スマートフォンでもOK 📱

---

## 📋 概要

**会話ネタジェネレーター**は、飲み会や宅のみなどで話が途絶えたときに救いの手を差し伸べるシンプルで楽しいウェブアプリケーションです。

3つのカテゴリーから選択した質問がランダムに表示され、会話がスムーズに進むようにサポートします。45個以上の用意された質問が、あなたの会話を盛り上げます。

### ✨ 主な特徴

| 特徴 | 説明 |
|------|------|
| 🎯 **ワンボタン操作** | 🎲 ボタンを押すだけでランダムに質問が表示 |
| 📱 **完全レスポンシブ** | スマートフォン・タブレット・PC全て対応 |
| 🎨 **モダンなデザイン** | グラデーション背景と滑らかなアニメーション |
| ⚡ **高速・軽量** | フレームワーク不要、HTMLオンリー動作 |
| 📊 **履歴機能** | その会話で出た質問を自動記録（最大10個） |
| 🏷️ **カテゴリー分類** | 3種類の質問タイプから好きなものを選択可能 |
| 🔒 **安全・オフライン対応** | 外部API不要、ローカルで完全動作 |
| ♿ **アクセシビリティ対応** | キーボード操作・スクリーンリーダー対応 |

---

## 🎯 質問の種類

### 深い話題（15個）
人間関係や人生観に関する質問で、相手をより深く知ることができます。
- 「最近ハマっていることは何ですか？」
- 「人生で実現したい夢や目標は？」
- 「尊敬している人は誰ですか？」

### 楽しい話題（15個）
エンタメやカジュアルな会話を引き出す質問です。
- 「好きな映画やドラマジャンルは？」
- 「もし100万円もらったら何を買う？」
- 「最近笑った話を教えてください！」

### アイスブレイク（15個）
初対面や会話のきっかけに最適な軽い質問です。
- 「今日は仕事・学校どうでしたか？」
- 「朝派？夜派？」
- 「猫派？犬派？」

---

## 🚀 クイックスタート

### 最も簡単な使い方

1. リポジトリをクローン（またはダウンロード）
   ```bash
   git clone https://github.com/yourusername/MedachitaGirl.git
   cd MedachitaGirl
   ```

2. `index.html`をブラウザで開く
   ```
   ダブルクリック または ファイル → 開く を選択
   ```

3. 🎲 ボタンを押して楽しむ！

### ローカルサーバーで実行（推奨）

**Python 3.x の場合：**
```bash
python -m http.server 8000
```

**Node.js の場合：**
```bash
npx http-server
```

その後、ブラウザで `http://localhost:8000` にアクセス

---

## 📁 プロジェクト構成

```
MedachitaGirl/
├── index.html          # メインのHTMLファイル（64行）
├── styles.css          # レスポンシブスタイルシート（300行以上）
├── script.js           # JavaScriptロジック（120行）
└── README.md           # このファイル

合計： 3ファイル、依存関係なし
```

### ファイルの詳しい説明

| ファイル | 目的 | サイズ |
|---------|------|--------|
| **index.html** | ページ構造とレイアウト | ~3KB |
| **styles.css** | レスポンシブデザイン、アニメーション | ~8KB |
| **script.js** | 質問データ、ロジック、イベント処理 | ~4KB |

---

## 💻 使い方

### 基本的な操作

1. **質問を表示する**
   - 🎲「質問をもらう」ボタンをクリック
   - ランダムに選ばれた質問が大きく表示されます

2. **別の質問に切り替える**
   - 「別の質問をもらう」ボタンをクリック
   - 異なる質問が表示されます

3. **質問の種類を選ぶ**
   - 左側の3つのチェックボックスで選択
   - 「深い話題」「楽しい話題」「アイスブレイク」を組み合わせ可能
   - 複数選択で質問のバリエーションが増えます

4. **質問履歴を確認**
   - その会話で出た質問が下に記録されます
   - 最大10個まで保存（新しい質問で古いものが削除）

---

## 🎨 カスタマイズガイド

### 質問を追加・編集する

`script.js`の `topics` オブジェクトを編集：

```javascript
const topics = {
    deep: [
        "既存の質問...",
        "新しい質問をここに追加", // ← 追加
    ],
    fun: [
        // ...
    ],
    icebreaker: [
        // ...
    ]
};
```

### 色スキームを変更する

`styles.css`のグラデーション色を編集：

```css
/* プライマリーカラー（デフォルト：紫） */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* 新しい色に変更: #667eea → #FF6B6B など */
}

/* アクセント色 */
.generate-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* または単色に: background: #FF6B6B; */
}
```

### テキストを変更する

`index.html`の以下の部分を編集：

```html
<h1 class="logo">🎉 会話ネタジェネレーター</h1>
<p class="tagline">飲み会や宅のみで話題に困ったときに！</p>
```

### 絵文字を変更する

各カテゴリーボタンのラベル内の絵文字を変更：

```javascript
// script.js 内
// 【深い話題】 → 【♥️深い話題】など
// 現在: 🎉 会話ネタジェネレーター
```

---

## 📱 レスポンシブデザイン

### ブレークポイント

| デバイス | 幅 | 特徴 |
|---------|-----|------|
| **デスクトップ** | 1200px以上 | 標準レイアウト |
| **タブレット** | 768px-1200px | 最適化されたレイアウト |
| **スマートフォン** | 768px未満 | ワンカラムレイアウト |

### モバイル最適化

- タッチフレンドリーな大きなボタン（18px以上）
- 読みやすいフォントサイズ
- スワイプ操作に対応したチェックボックス
- 圧縮されたレイアウトで全情報が画面に収まる

---

## 🛠️ 技術スタック

| 技術 | 説明 |
|------|------|
| **HTML5** | セマンティックマークアップ |
| **CSS3** | グラデーション、アニメーション、グリッドレイアウト |
| **Vanilla JavaScript** | フレームワークなし、純粋なJS |

**依存関係**: なし ✨

---

## 🚢 デプロイ方法

このサイトは静的ウェブサイトのため、どのホスティングサービスでも動作します。

### GitHub Pages（推奨・無料）
```bash
# リポジトリ設定 → Pages → Source を "main branch" に設定
# https://yourusername.github.io/MedachitaGirl/ でアクセス可能
```

### Netlify（無料・簡単）
1. [netlify.com](https://netlify.com) にアクセス
2. リポジトリをドラッグ&ドロップ
3. 自動でデプロイされます

### その他のサービス
- Vercel
- AWS S3 + CloudFront
- Firebase Hosting
- サーバーのある任意のホスティング

---

## ⚙️ 設定オプション

### 履歴の最大数を変更

`script.js`の以下の行を編集：

```javascript
if (history.length > 10) {  // ← 10を好きな数に変更
    history.pop();
}
```

### 質問表示時のアニメーションを無効化

`styles.css`で以下を削除：

```css
@keyframes slideIn {
    /* この部分を削除 */
}

.topic-display.active {
    animation: slideIn 0.5s ease-out;  /* この行を削除 */
}
```

---

## 🐛 トラブルシューティング

### Q: ボタンが反応しない
**A:** ブラウザのコンソール（F12）でエラーを確認。ファイルが同じフォルダにあるか確認してください。

### Q: 質問が表示されない
**A:** チェックボックスで最低1つのカテゴリーが選択されているか確認。

### Q: スタイルが崩れている
**A:** `styles.css`がHTMLと同じフォルダにあるか確認。キャッシュをクリア（Ctrl+F5）してください。

### Q: モバイルで表示がおかしい
**A:** ブラウザを再読み込み（Ctrl+R）。ビューポート設定は自動で対応しています。

---

## 📊 パフォーマンス

- **初回ロード**: ~100ms
- **ファイルサイズ**: 合計 ~15KB（未圧縮）
- **メモリ使用量**: ~2MB
- **ブラウザ対応**: Chrome, Firefox, Safari, Edge（最新2世代）

---

## ❓ よくある質問

**Q: 質問を削除できますか？**  
A: `script.js`の`topics`オブジェクトから該当する質問を削除してください。

**Q: 多言語対応できますか？**  
A: はい。`script.js`と`index.html`のテキストを翻訳すれば対応できます。

**Q: オフラインで使えますか？**  
A: はい。完全にローカルで動作するため、インターネット接続は不要です。

**Q: 商用利用できますか？**  
A: はい。MITライセンスの下で自由に利用できます。

**Q: フレームワーク化できますか？**  
A: React/Vue版の開発も可能です。Issue や PR を開いてください。

---

## 🤝 コントリビューション

改善提案やバグ報告は以下の方法でお知らせください：

1. **Issue を作成**: [GitHub Issues](https://github.com/yourusername/MedachitaGirl/issues)
2. **PR を送信**: [Pull Requests](https://github.com/yourusername/MedachitaGirl/pulls)
3. **議論**: [Discussions](https://github.com/yourusername/MedachitaGirl/discussions)

---

## 📝 ライセンス

このプロジェクトは **MIT License** の下で公開されています。

```
MIT License

Copyright (c) 2026 m1KoSun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

詳細は [LICENSE](LICENSE) ファイルを参照してください。

---

## 🎯 今後の計画（Roadmap）

- [ ] 質問を追加（100個以上に拡充）
- [ ] ダークモード対応
- [ ] 検索・フィルター機能
- [ ] ブックマーク・お気に入り機能
- [ ] ソーシャルメディア共有（Twitter, LINE）
- [ ] PWA化（オフラインでもインストール可能）
- [ ] 複数言語対応（英語、中国語など）
- [ ] ユーザーカスタム質問機能
- [ ] 統計機能（よく出た質問など）

---

## 📚 参考資料

- [MDN Web Docs - HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout)
- [Vanilla JS Tips](https://developer.mozilla.org/ja/docs/Web/JavaScript)

---

## 👨‍💻 開発者情報

**作成者**: m1KoSun  
**作成日**: 2026年3月28日  
**バージョン**: 1.0.0  
**最終更新**: 2026年3月28日  

---

<div align="center">

**[↑ トップに戻る](#-会話ネタジェネレーター---conversation-starter)**

Made with ❤️ for fun conversations

</div>
