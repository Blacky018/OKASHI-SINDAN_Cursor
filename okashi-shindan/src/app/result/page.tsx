/**
 * 結果ページコンポーネント
 * 
 * 診断結果として選ばれたお菓子の情報を表示します。
 * URLのクエリパラメータ（?id=1など）からお菓子のIDを取得し、
 * 該当するお菓子データを表示します。
 */

'use client' // クライアントコンポーネント

import { useSearchParams } from 'next/navigation' // URLのクエリパラメータを取得
import { Suspense } from 'react' // 非同期コンポーネントのローディング状態を管理
import Link from 'next/link' // Next.jsのリンクコンポーネント
import sweetsData from '@/data/sweets.json' // お菓子データ
import { type Sweet } from '@/lib/diagnosis' // お菓子の型定義

/**
 * 結果コンテンツコンポーネント
 * useSearchParamsを使うため、Suspenseでラップする必要がある
 */
function ResultContent() {
  // URLのクエリパラメータを取得（例: ?id=1 の id 部分）
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  
  // IDからお菓子データを検索
  // parseInt(id): 文字列を数値に変換
  // find: 配列から条件に合う最初の要素を取得
  const sweet = id 
    ? (sweetsData.find((s) => s.id === parseInt(id)) as Sweet | undefined)
    : null

  // お菓子が見つからない場合のエラー表示
  if (!sweet) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-xl">お菓子が見つかりませんでした</p>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="w-full max-w-2xl space-y-8">
        {/* ページタイトル */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            診断結果
          </h1>
          <p className="text-xl text-gray-700">
            あなたにぴったりのお菓子は...
          </p>
        </div>

        {/* 
          結果カード
          - bg-white: 白背景
          - rounded-2xl: 角丸
          - shadow-xl: 影効果
          - p-8: パディング
        */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in">
          {/* お菓子の基本情報 */}
          <div className="text-center">
            <h2 className="text-5xl mb-2">🍰</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {sweet.name} {/* お菓子の名前 */}
            </h3>
            <p className="text-gray-600">{sweet.category}</p> {/* カテゴリ */}
          </div>

          {/* お菓子の詳細情報 */}
          <div className="space-y-4">
            {/* 説明 */}
            <div>
              <h4 className="font-bold text-gray-700 mb-2">説明</h4>
              <p className="text-gray-600">{sweet.description}</p>
            </div>

            {/* おすすめポイント */}
            <div>
              <h4 className="font-bold text-gray-700 mb-2">おすすめポイント</h4>
              <p className="text-gray-600">{sweet.recommendation}</p>
            </div>

            {/* 
              価格帯と甘さを2列のグリッドで表示
              - grid grid-cols-2: 2列のグリッドレイアウト
              - gap-4: 列間の間隔
              - pt-4 border-t: 上にパディングとボーダー
            */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <p className="text-sm text-gray-500">価格帯</p>
                <p className="font-semibold">{sweet.price_range}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">甘さ</p>
                <p className="font-semibold">{sweet.sweetness}</p>
              </div>
            </div>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* 再診断ボタン */}
          <Link
            href="/diagnose"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-center shadow-lg transform transition hover:scale-105"
          >
            もう一度診断する
          </Link>
          {/* トップに戻るボタン */}
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full text-center shadow-lg transform transition hover:scale-105"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}

/**
 * 結果ページのメインコンポーネント
 * useSearchParamsを使うコンポーネントはSuspenseでラップする必要がある
 * （Next.js 14のApp Routerの要件）
 */
export default function ResultPage() {
  return (
    /* 
      Suspense: 非同期コンポーネントのローディング状態を管理
      - fallback: ローディング中に表示するコンテンツ
    */
    <Suspense fallback={
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-xl">読み込み中...</p>
      </main>
    }>
      <ResultContent />
    </Suspense>
  )
}

