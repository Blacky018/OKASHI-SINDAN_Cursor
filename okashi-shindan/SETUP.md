# セットアップ手順

## 1. 依存関係のインストール

プロジェクトディレクトリに移動して、依存関係をインストールします：

```bash
cd okashi-shindan
npm install
```

または

```bash
cd okashi-shindan
yarn install
```

## 2. 開発サーバーの起動

```bash
npm run dev
```

または

```bash
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 3. ビルド（本番用）

```bash
npm run build
npm start
```

## プロジェクトの構成

- **トップページ** (`/`) - アプリの紹介と診断開始ボタン
- **診断ページ** (`/diagnose`) - 質問に答えて診断
- **結果ページ** (`/result`) - 診断結果の表示

## カスタマイズ

### お菓子データの追加・編集

`src/data/sweets.json` を編集して、お菓子データを追加・変更できます。

### 質問の追加・編集

`src/data/questions.json` を編集して、質問を追加・変更できます。

### 診断ロジックの調整

`src/lib/diagnosis.ts` を編集して、診断アルゴリズムを調整できます。

## トラブルシューティング

### ポートが既に使用されている場合

```bash
npm run dev -- -p 3001
```

### 依存関係のエラー

```bash
rm -rf node_modules package-lock.json
npm install
```

## 次のステップ

1. お菓子データを追加・編集
2. デザインのカスタマイズ（Tailwind CSS）
3. 画像の追加（`public/images/` に配置）
4. 診断ロジックの改善

