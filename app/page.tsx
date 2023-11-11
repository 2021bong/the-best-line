import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src='/space_uchu_penguin.png'
        alt='space penguin'
        width={300}
        height={300}
        priority
      />
      <h1 className={'mb5'}>최고의 한 줄</h1>
      <h3 className={'mb10'}>~릴레이 소설 쓰기~</h3>
      <p className={'text_center mb20'}>
        오늘은 내가 소설가 ! <br /> 릴레이 소설 쓰기에 참여해보세요.
      </p>
      <button className={styles.button}>참여하러가기</button>
    </main>
  );
}
