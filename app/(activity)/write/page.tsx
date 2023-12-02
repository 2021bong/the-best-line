import styles from './page.module.scss';

export default function Write() {
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
      <form className={styles.form}>
        <input
          className={styles.input}
          name='content'
          id='input'
          placeholder='여기에 내용이 이어지도록 작성해보세요.'
        ></input>
        <button type='submit' className={styles.button}>
          작성 완료
        </button>
      </form>
    </div>
  );
}
