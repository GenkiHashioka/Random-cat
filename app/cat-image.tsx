'use client'; // (1) use clientを指定

import { useState } from 'react'; // 追加
import { fetchImage } from './fetch-image';
import styles from './page.module.css';
// コンポーネントの引数を定義する。
type CatImageProps = {
  url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
  // (2) useStateを使って状態を管理
  const [imageUrl, setImageUrl] = useState(url);
  // (3) 画像を取得する関数を定義
  const refreshImage = async () => {
    setImageUrl(''); // 初期化
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={styles.page}>
      {/* (4) ボタンの表示 */}
      <button onClick={refreshImage} className={styles.button}>
        他のにゃんこも見てみる？？
      </button>
      {/* (5) 画像の表示 */}
      <div>{imageUrl && <img src={imageUrl} className={styles.img} />}</div>
    </div>
  );
}
