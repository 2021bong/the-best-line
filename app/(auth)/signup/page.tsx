'use client';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import styles from './page.module.scss';
import { useState } from 'react';
import app from '@/util/initializeFirebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const onSignup = () => {
    const auth = getAuth(app);
    if (email && nickname && password && confirmPw) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (auth.currentUser) {
            updateProfile(auth.currentUser, { displayName: nickname });
          }
          console.log('success : ', userCredential);
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log('error : ', error);
          alert('에러가 발생했습니다. 다시 시도해주세요.');
        });
    } else {
      alert('필수항목을 모두 입력해주세요.');
    }
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>회원가입</h3>
      <p>* 필수 항목</p>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <p>
          <label htmlFor='email'>이메일*</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='nickname'>닉네임*</label>
          <input
            type='text'
            id='nickname'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='pw'>비밀번호*</label>
          <input
            type='password'
            id='pw'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='confimpw'>비밀번호 확인*</label>
          <input
            type='password'
            id='confimpw'
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />
        </p>
        <button onClick={onSignup} className={styles.button}>
          가입 완료
        </button>
      </form>
    </div>
  );
}
