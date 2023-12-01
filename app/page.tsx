import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Home() {
  const writingRules = [
    '가장 최근에 작성된 순대로 최대 5문장까지 볼 수 있다.',
    '현재 진행된 내용과 어울리도록 문장을 잇는다.',
    '사회적 규범과 예절에 맞게 작성한다.',
    '하루에 한 번만 작성할 수 있다.',
    '작성 완료된 내용은 수정할 수 없다.',
    '마음에 드는 문장에 좋아요를 눌러 투표할 수 있다.',
  ];

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
        <div className={styles.rules_box + ' mb20'}>
          <h3 className={'text_center mb20'}>최고의 한 줄 규칙</h3>
          <ol className={styles.rules}>
            {writingRules.map((rule, i) => (
              <li key={rule}>{i + 1 + '. ' + rule}</li>
            ))}
          </ol>
        </div>
        <Link href='/write'>
          <button className={styles.button}>참여하러 가기</button>
        </Link>
      </div>
    </main>
  );
}
