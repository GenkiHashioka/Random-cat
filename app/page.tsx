import { CatImage } from './cat-image';
import { connection } from 'next/server';
import { fetchImage } from './fetch-image';

export default async function Home() {
  await connection();
  // APIから画像を取得
  const image = await fetchImage();
  console.log('Home: 画像情報を取得しました', image);
  // 画像のURLを渡す
  return <CatImage url={image.url} />;
}
