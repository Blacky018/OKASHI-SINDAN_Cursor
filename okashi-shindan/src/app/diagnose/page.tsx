/**
 * 診断ページコンポーネント
 * 
 * ユーザーに質問を表示し、回答を収集して診断を実行します。
 * 質問は順番に表示され、全ての質問に答えると結果ページに遷移します。
 */

'use client' // クライアントコンポーネント（useStateやuseRouterを使うため）

import { useState } from 'react' // Reactの状態管理フック
import { useRouter } from 'next/navigation' // Next.jsのルーティングフック
import questionsData from '@/data/questions.json' // 質問データをインポート
import { diagnose, type Answer } from '@/lib/diagnosis' // 診断ロジックと型定義

export default function DiagnosePage() {
  // Next.jsのルーター（ページ遷移に使用）
  const router = useRouter()
  
  // 現在表示している質問のインデックス（0から始まる）
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  
  // ユーザーの回答を保存する配列
  const [answers, setAnswers] = useState<Answer[]>([])
  
  // 現在の質問データを取得
  const currentQuestion = questionsData[currentQuestionIndex]
  
  // 質問の総数
  const totalQuestions = questionsData.length
  
  // 進捗率を計算（0-100%）
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  /**
   * 回答を処理する関数
   * @param value - 選択された回答の値
   */
  const handleAnswer = (value: string) => {
    // 新しい回答オブジェクトを作成
    const newAnswer: Answer = {
      questionId: currentQuestion.id, // 質問ID
      value: value, // 選択された値
    }
    
    // 既存の回答に新しい回答を追加（スプレッド構文で配列をコピー）
    const newAnswers = [...answers, newAnswer]
    setAnswers(newAnswers) // 状態を更新

    // まだ質問が残っている場合
    if (currentQuestionIndex < totalQuestions - 1) {
      // 次の質問に進む
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // 全ての質問に回答した場合、診断を実行
      const result = diagnose(newAnswers)
      
      // 結果ページに遷移（お菓子のIDをクエリパラメータとして渡す）
      router.push(`/result?id=${result.id}`)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="w-full max-w-2xl space-y-8">
        {/* 
          進捗バー
          - 外側のdiv: グレーの背景バー
          - 内側のdiv: オレンジの進捗バー（幅はprogress%で動的に変更）
          - transition-all: スムーズなアニメーション
        */}
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-orange-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* 質問番号の表示（例: 1 / 5） */}
        <p className="text-center text-gray-600">
          {currentQuestionIndex + 1} / {totalQuestions}
        </p>

        {/* 質問カード */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* 質問文 */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            {currentQuestion.question}
          </h2>
          
          {/* 選択肢ボタン */}
          <div className="space-y-4">
            {/* 
              map関数で各選択肢をボタンとして表示
              - key: Reactのリストで必要な一意のキー
              - onClick: ボタンクリック時にhandleAnswerを呼び出し
            */}
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full bg-orange-100 hover:bg-orange-200 text-gray-800 font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

