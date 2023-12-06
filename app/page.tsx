import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import WritingRules from '@/src/components/writingRules';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={'mb20'}
        src='/space_uchu_penguin.png'
        alt='space penguin'
        width={300}
        height={300}
        priority
      />
      <div className={styles.container}>
        <h1 className={'mb20'}>최고의 한 줄</h1>
        <h3 className={'mb10'}>~릴레이 소설 쓰기~</h3>
        <p className={styles.description + ' text_center mb30'}>
          여러 사람이 한 줄씩 글을 적어 소설을 완성한 뒤 가장 많은 투표를 받은
          최고의 명대사를 뽑는 <b>릴레이 소설 프로젝트</b>
          입니다.
          <br />
          지금 바로 참여해 명대사의 작가가 되어보세요 !
          <br />
          <span>(명대사 작가가 되신 분께는 소정의 선물을 증정합니다.)</span>
        </p>
        <WritingRules />
        <Link href='/progress'>
          <button className={styles.button}>참여하러 가기</button>
        </Link>
      </div>
    </main>
  );
}
