# お菓子診断アプリ

今食べたいお菓子を診断してくれるNext.jsアプリケーションです。

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
# または
yarn install
```

### 2. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## プロジェクト構造

```
okashi-shindan/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # トップページ
│   │   ├── diagnose/     # 診断ページ
│   │   └── result/       # 結果ページ
│   ├── components/       # 再利用可能なコンポーネント
│   ├── data/            # データファイル（JSON）
│   │   ├── sweets.json  # お菓子データ
│   │   └── questions.json # 質問データ
│   └── lib/             # ユーティリティ関数
│       └── diagnosis.ts # 診断ロジック
├── public/              # 静的ファイル
│   └── images/         # 画像ファイル
└── package.json
```

## 機能

- 質問形式の診断機能
- 回答に基づいたお菓子の提案
- 結果表示と再診断機能

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## ビルド

```bash
npm run build
npm start
```

## デプロイ

このアプリを公開するには、以下の手順を参照してください：

1. [デプロイ手順 (DEPLOY.md)](./DEPLOY.md) を確認
2. GitHubにリポジトリを作成
3. Vercelでデプロイ（推奨）

詳細は `DEPLOY.md` を参照してください。

## ライセンス

MIT

