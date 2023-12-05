'use client';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.scss';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APPKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onLogin = () => {
    const auth = getAuth(app);
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('success : ', userCredential);
          const user = userCredential.user;
          router.push('/write');
        })
        .catch((error) => {
          console.log('error : ', error);
          alert('올바른 아이디와 비밀번호를 입력해주세요.');
          setPassword('');
        });
    } else {
      alert('이메일과 비밀번호를 입력하세요.');
    }
  };
  const moveSignup = () => router.push('/signup');
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          <label htmlFor='email'>이메일</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='pw'>비밀번호</label>
          <input
            type='password'
            id='pw'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <div className={styles.button_box}>
          <button onClick={onLogin} className={styles.button}>
            로그인
          </button>
          <button onClick={moveSignup} className={styles.button}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
