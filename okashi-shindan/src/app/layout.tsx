/**
 * ルートレイアウトコンポーネント
 * 
 * Next.jsのApp Routerでは、app/layout.tsxが全ページの共通レイアウトになります。
 * このファイルで全ページに適用される設定（メタデータ、フォント、スタイルなど）を定義します。
 */

import type { Metadata } from 'next' // Next.jsのメタデータ型
import { Inter } from 'next/font/google' // Google FontsからInterフォントをインポート
import './globals.css' // グローバルスタイルシート

/**
 * Interフォントの設定
 * - subsets: 使用する文字セット（'latin'は英語・ローマ字）
 * - Next.jsが自動的にフォントを最適化して読み込む
 */
const inter = Inter({ subsets: ['latin'] })

/**
 * メタデータ（SEOやブラウザ表示に使用）
 * - title: ブラウザのタブに表示されるタイトル
 * - description: 検索エンジンやSNSシェア時に表示される説明文
 */
export const metadata: Metadata = {
  title: 'お菓子診断アプリ',
  description: '今食べたいお菓子を診断してくれるアプリ',
}

/**
 * ルートレイアウトコンポーネント
 * 
 * @param children - 各ページのコンテンツ（page.tsxの内容が入る）
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    /* 
      html要素: ルート要素
      - lang="ja": 日本語ページであることを示す
    */
    <html lang="ja">
      {/* 
        body要素: ページの本文
        - className={inter.className}: Interフォントを適用
        - {children}: 各ページのコンテンツがここに表示される
      */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}

