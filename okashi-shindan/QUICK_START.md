# クイックスタート：GitHub公開ガイド

## 🚀 5分でGitHubに公開する手順

### ステップ1: GitHubリポジトリを作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例: `okashi-shindan`）
4. **「Initialize this repository with a README」はチェックしない**
5. 「Create repository」をクリック

### ステップ2: ターミナルでコマンドを実行

プロジェクトディレクトリ（`okashi-shindan`）で以下を実行：

```bash
# Gitを初期化
git init

# 全てのファイルを追加
git add .

# コミット
git commit -m "Initial commit: お菓子診断アプリ"

# ブランチ名をmainに設定
git branch -M main

# GitHubリポジトリを追加（YOUR_USERNAMEとYOUR_REPO_NAMEを置き換える）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# GitHubにプッシュ
git push -u origin main
```

**例**（ユーザー名が`koki`、リポジトリ名が`okashi-shindan`の場合）:
```bash
git remote add origin https://github.com/koki/okashi-shindan.git
git push -u origin main
```

### ステップ3: Vercelでデプロイ（無料）

1. [Vercel](https://vercel.com)にアクセス
2. 「Sign Up」→ GitHubアカウントでログイン
3. 「Add New Project」をクリック
4. 作成したリポジトリを選択
5. 「Deploy」をクリック

**完了！** 数分でアプリが公開されます 🎉

---

## 📝 変更が必要なファイル

**実は、変更が必要なファイルはありません！**

プロジェクトは既にGitHub公開とデプロイの準備が整っています：

✅ `.gitignore` - 既に設定済み  
✅ `package.json` - ビルドスクリプト設定済み  
✅ `README.md` - プロジェクト説明あり  
✅ `DEPLOY.md` - 詳細なデプロイ手順あり  

そのまま上記のコマンドを実行するだけでOKです！

---

## 🔄 今後の更新方法

コードを変更した後：

```bash
git add .
git commit -m "更新内容"
git push
```

Vercelが自動的に再デプロイします。

---

## ❓ よくある質問

**Q: GitHubアカウントがない**
A: [GitHub](https://github.com)で無料アカウントを作成してください

**Q: Gitがインストールされていない**
A: [Git公式サイト](https://git-scm.com/downloads)からダウンロード

**Q: エラーが出る**
A: `DEPLOY.md`の「トラブルシューティング」セクションを参照

