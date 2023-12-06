'use client';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Progress() {
  const token = sessionStorage.getItem('accessToken');
  const lines = [
    '"뭘 하고 계시는 거예요?"',
    '"술 마시지."',
    '"술은 왜 마셔요?"',
    '"잊으려고"',
    '"뭘 잊어요?"',
  ];

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.content_box}>...</p>
        {lines.map((line) => (
          <p key={line} className={styles.content_box}>
            {line}
          </p>
        ))}
      </div>
      <Link href={token ? '/write' : '/login'}>
        <button className={styles.button}>
          {token ? '작성하기' : '로그인하고 작성하기'}
        </button>
      </Link>
    </div>
  );
}
