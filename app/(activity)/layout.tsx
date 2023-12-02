import type { Metadata } from 'next';
import Link from 'next/link';
import '../globals.css';

export const metadata: Metadata = {
  title: '최고의 한 줄',
  description: '진행 상황보기, 소설쓰기, 완성된 소설보기를 진행할 수 있어요.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const navContent = [
    {
      url: '/progress',
      text: '진행중',
    },
    {
      url: '/write',
      text: '작성 하기',
    },
    {
      url: '/novels',
      text: '완성된 소설',
    },
  ];
  return (
    <html lang='ko'>
      <body>
        <nav className='nav_bar'>
          {navContent.map((nav) => (
            <li key={nav.url} title={nav.text}>
              <Link href={nav.url}>{nav.text}</Link>
            </li>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}
