import styles from './page.module.scss';

export default function Write() {
  const lines = [
    '시작된 첫 문장',
    '두번째 문장',
    '세번째 문장',
    '네번째 문장',
    '다섯번째 문장',
  ];
  return (
    <>
      <div>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <form>
        <textarea name='content' id='textarea'></textarea>
        <button type='submit' className={styles.button}>
          작성 완료
        </button>
      </form>
    </>
  );
}
