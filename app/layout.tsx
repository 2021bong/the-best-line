import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '최고의 한 줄 ~릴레이 소설 쓰기~',
  description: '오늘은 내가 소설가 ! 릴레이 소설 쓰기에 참여해보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
