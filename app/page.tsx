'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='main'>
      <Image
        src='/space_uchu_penguin.png'
        alt='space penguin'
        width={300}
        height={300}
        priority
      />
      <h1 className='mb5'>최고의 한 줄</h1>
      <h3 className='mb10'>~릴레이 소설 쓰기~</h3>
      <p className='text_center mb20'>
        오늘은 내가 소설가 ! <br /> 릴레이 소설 쓰기에 참여해보세요.
      </p>
      <Link href='/infomation'>
        <button className='button'>참여하러가기</button>
      </Link>

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 6rem;
          min-height: 100vh;
        }

        .description {
          text-align: center;
        }

        .button {
          padding: 10px 15px;
          border-radius: 10px;
          font-size: 1rem;
          background-color: #1d4ed8;
          font-weight: 700;

          &:hover {
            background-color: #3b82f6;
          }

          &:active {
            background-color: #1e3a8a;
          }
        }

        /* Next.js template CSS */

        /* Mobile */
        .template {
          border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
          background: linear-gradient(
            to bottom,
            rgba(var(--background-start-rgb), 1),
            rgba(var(--callout-rgb), 0.5)
          );
          background-clip: padding-box;
          backdrop-filter: blur(24px);
        }

        /* Tablet and Smaller Desktop */

        @media (prefers-color-scheme: dark) {
        }
      `}</style>
    </main>
  );
}
