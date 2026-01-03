/**
 * トップページコンポーネント
 * 
 * アプリの最初の画面で、ユーザーにアプリの説明と診断開始ボタンを表示します。
 * Next.jsのApp Routerでは、page.tsxがそのディレクトリのルートページになります。
 */

'use client' // クライアントコンポーネントとして動作（ブラウザで実行される）

import Link from 'next/link' // Next.jsのリンクコンポーネント（ページ遷移を最適化）

export default function Home() {
  return (
    /* 
      main要素：ページのメインコンテンツ
      Tailwind CSSクラス：
      - flex: Flexboxレイアウト
      - min-h-screen: 画面の高さいっぱいに表示
      - flex-col: 縦方向に配置
      - items-center: 横方向の中央揃え
      - justify-center: 縦方向の中央揃え
      - p-8: パディング（余白）32px
      - bg-gradient-to-br: 左上から右下へのグラデーション
      - from-orange-50 to-pink-50: オレンジからピンクへのグラデーション
    */
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-pink-50">
      {/* コンテンツを中央に配置するコンテナ */}
      <div className="text-center space-y-8 max-w-2xl">
        {/* アプリのタイトル */}
        <h1 className="text-6xl font-bold text-orange-600 mb-4">
          🍪 お菓子診断 🍰
        </h1>
        
        {/* アプリの説明文 */}
        <p className="text-xl text-gray-700 mb-8">
          今の気分や状況に合わせて、<br />
          あなたにぴったりのお菓子を診断します！
        </p>
        
        {/* 
          診断開始ボタン（Next.jsのLinkコンポーネント）
          - href="/diagnose": 診断ページへのリンク
          - className: Tailwind CSSでスタイリング
            * inline-block: インラインブロック要素
            * bg-orange-500: オレンジの背景色
            * hover:bg-orange-600: ホバー時の色変更
            * rounded-full: 完全に丸いボタン
            * transform transition hover:scale-105: ホバー時に1.05倍に拡大
        */}
        <Link
          href="/diagnose"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
        >
          診断を始める
        </Link>
      </div>
    </main>
  )
}

