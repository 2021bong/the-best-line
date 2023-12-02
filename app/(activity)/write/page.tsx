'use client';
import { ChangeEvent, useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Write() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const handleWriteContent = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setContent(target.value);
  };
  const handleSendMessage = () => {
    if (content) {
      alert(content); // test code
      axios
        .post('/server/write', { text: content })
        .then((res) => {
          router.push('/write/complete');
        })
        .catch((err) => alert('작성에 실패하였습니다.'));
    } else {
      alert('내용을 작성해주세요!');
    }
  };
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
        {lines.map((line) => (
          <p key={line} className={styles.content_box}>
            {line}
          </p>
        ))}
      </div>
      <p className={styles.information_text}>
        지금까지 이렇게 이야기가 진행되고 있어요.
      </p>
      <p className={styles.information_text}>다음에 올 내용을 적어주세요.</p>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.input}
          name='content'
          id='input'
          placeholder='여기에 내용이 이어지도록 작성해보세요.'
          value={content}
          onChange={handleWriteContent}
        ></input>
        <button
          type='submit'
          className={styles.button}
          onClick={handleSendMessage}
        >
          작성 완료
        </button>
      </form>
    </div>
  );
}
