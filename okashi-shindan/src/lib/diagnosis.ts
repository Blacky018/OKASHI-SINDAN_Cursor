/**
 * 診断ロジック
 * 
 * ユーザーの回答に基づいて、最適なお菓子を選出するアルゴリズムを実装しています。
 * 各お菓子に対してスコアを計算し、最もスコアの高いお菓子を提案します。
 */

import sweetsData from '@/data/sweets.json';

/**
 * お菓子の型定義
 * お菓子データの構造を定義しています
 */
export interface Sweet {
  id: number;                    // お菓子のID（一意の識別子）
  name: string;                  // お菓子の名前
  category: string;               // カテゴリ（チョコレート、クッキーなど）
  description: string;           // 説明文
  price_range: string;           // 価格帯
  texture: string[];             // 食感（複数可：サクサク、ふわふわなど）
  sweetness: string;             // 甘さ（甘め、控えめ、苦め）
  mood: string[];                // 気分（複数可：リラックス、元気になりたいなど）
  time: string[];               // 時間帯（複数可：朝、昼、夜、深夜）
  image: string;                 // 画像のパス
  recommendation: string;        // おすすめポイント
}

/**
 * 回答の型定義
 * ユーザーが選択した回答の構造を定義しています
 */
export interface Answer {
  questionId: number;  // 質問ID（どの質問への回答か）
  value: string;       // 選択された値（例: "リラックス"、"甘め"）
}

/**
 * 診断関数
 * ユーザーの回答に基づいて最適なお菓子を選出します
 * 
 * @param answers - ユーザーの回答配列
 * @returns 選ばれたお菓子
 */
export function diagnose(answers: Answer[]): Sweet {
  // お菓子データを型安全に取得
  const sweets: Sweet[] = sweetsData as Sweet[];
  
  /**
   * 各お菓子に対してスコアを計算
   * map関数で各お菓子を処理し、スコアと一緒に返す
   */
  const scores = sweets.map(sweet => {
    let score = 0; // スコアの初期値
    
    // 各回答をチェックしてスコアを加算
    answers.forEach(answer => {
      /**
       * 質問1: 気分のマッチング
       * ユーザーが選んだ気分が、お菓子のmood配列に含まれていれば+3点
       * （気分は最も重要な要素なので高得点）
       */
      if (answer.questionId === 1 && sweet.mood.includes(answer.value)) {
        score += 3;
      }
      
      /**
       * 質問2: 時間帯のマッチング
       * ユーザーが選んだ時間帯が、お菓子のtime配列に含まれていれば+2点
       */
      if (answer.questionId === 2 && sweet.time.includes(answer.value)) {
        score += 2;
      }
      
      /**
       * 質問4: 食感のマッチング
       * ユーザーが選んだ食感が、お菓子のtexture配列に含まれていれば+2点
       */
      if (answer.questionId === 4 && sweet.texture.includes(answer.value)) {
        score += 2;
      }
      
      /**
       * 質問5: 甘さのマッチング
       * ユーザーが選んだ甘さが、お菓子のsweetnessと完全一致すれば+2点
       */
      if (answer.questionId === 5 && sweet.sweetness === answer.value) {
        score += 2;
      }
    });
    
    // お菓子とそのスコアを返す
    return { sweet, score };
  });
  
  /**
   * スコアが高い順にソート
   * b.score - a.score: 降順（高い順）にソート
   */
  scores.sort((a, b) => b.score - a.score);
  
  /**
   * 全てのスコアが0の場合（マッチするお菓子がない場合）
   * ランダムにお菓子を選ぶ
   */
  if (scores[0].score === 0) {
    const randomIndex = Math.floor(Math.random() * sweets.length);
    return sweets[randomIndex];
  }
  
  // 最もスコアの高いお菓子を返す
  return scores[0].sweet;
}

