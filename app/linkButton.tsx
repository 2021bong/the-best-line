'use client';
import Link from 'next/link';
import styles from './page.module.scss';

interface ButtonProps {
  url: string;
  text: string;
}

export default function LinkButton({ url, text }: ButtonProps) {
  return (
    <Link href={url}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
}
