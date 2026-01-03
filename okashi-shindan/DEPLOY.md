# デプロイ手順

このドキュメントでは、お菓子診断アプリをGitHubに公開し、Vercelでデプロイする手順を説明します。

## 前提条件

- GitHubアカウントを持っていること
- Gitがインストールされていること
- ターミナル（コマンドライン）が使えること

---

## ステップ1: GitHubリポジトリの作成

1. GitHubにログインして、[新しいリポジトリを作成](https://github.com/new)
2. リポジトリ名を入力（例: `okashi-shindan`）
3. **Public**または**Private**を選択
4. **「Initialize this repository with a README」はチェックしない**（既にREADMEがあるため）
5. 「Create repository」をクリック

---

## ステップ2: Gitの初期化とコミット

プロジェクトディレクトリで以下のコマンドを実行します：

```bash
# プロジェクトディレクトリに移動
cd okashi-shindan

# Gitリポジトリを初期化
git init

# 全てのファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: お菓子診断アプリ"

# メインブランチを設定（GitHubのデフォルトに合わせる）
git branch -M main
```

---

## ステップ3: GitHubにプッシュ

GitHubで作成したリポジトリのURLを取得して、以下のコマンドを実行：

```bash
# GitHubリポジトリのURLを追加（YOUR_USERNAMEとYOUR_REPO_NAMEを置き換える）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# GitHubにプッシュ
git push -u origin main
```

**例**:
```bash
git remote add origin https://github.com/koki/okashi-shindan.git
git push -u origin main
```

---

## ステップ4: Vercelでデプロイ（推奨）

VercelはNext.jsアプリのデプロイに最適化されており、無料で使用できます。

### 4.1 Vercelアカウントの作成

1. [Vercel](https://vercel.com)にアクセス
2. 「Sign Up」をクリック
3. GitHubアカウントでログイン（推奨）

### 4.2 プロジェクトのインポート

1. Vercelのダッシュボードで「Add New Project」をクリック
2. GitHubリポジトリを選択
3. プロジェクト設定を確認：
   - **Framework Preset**: Next.js（自動検出される）
   - **Root Directory**: `./`（そのまま）
   - **Build Command**: `npm run build`（自動設定）
   - **Output Directory**: `.next`（自動設定）
4. 「Deploy」をクリック

### 4.3 デプロイ完了

数分でデプロイが完了します。完了すると、以下のようなURLが表示されます：
- `https://okashi-shindan.vercel.app`

このURLにアクセスすると、アプリが公開されています！

---

## ステップ5: カスタムドメインの設定（オプション）

Vercelでは無料でカスタムドメインを設定できます：

1. Vercelのプロジェクトページで「Settings」→「Domains」を開く
2. ドメイン名を入力
3. DNS設定に従って設定

---

## その他のデプロイオプション

### Netlify

1. [Netlify](https://www.netlify.com)にアクセス
2. GitHubアカウントでログイン
3. 「New site from Git」を選択
4. リポジトリを選択
5. ビルド設定：
   - Build command: `npm run build`
   - Publish directory: `.next`
6. 「Deploy site」をクリック

### GitHub Pages（静的エクスポートが必要）

Next.jsを静的サイトとしてエクスポートする必要があります：

1. `next.config.js`を編集：
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

2. ビルドとエクスポート：
```bash
npm run build
```

3. GitHub Pagesで公開

---

## トラブルシューティング

### ビルドエラーが発生する場合

```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

### 環境変数が必要な場合

Vercelのプロジェクト設定で「Environment Variables」から設定できます。

### 画像が表示されない場合

`public/images/`フォルダに画像ファイルを配置していることを確認してください。

---

## 今後の更新方法

コードを変更した後、以下のコマンドで更新を反映：

```bash
# 変更をコミット
git add .
git commit -m "更新内容の説明"

# GitHubにプッシュ
git push

# Vercelが自動的に再デプロイします
```

---

## 参考リンク

- [Next.js デプロイメント](https://nextjs.org/docs/deployment)
- [Vercel ドキュメント](https://vercel.com/docs)
- [Git 基本コマンド](https://git-scm.com/book/ja/v2)

