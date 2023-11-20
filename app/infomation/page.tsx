'use client';

export default function Information() {
  return (
    <div className='container'>
      <h1 className='mb20'>최고의 한 줄</h1>
      <p className='description text_center mb30'>
        여러 사람이 한 줄씩 글을 적어 소설을 완성한 뒤 가장 많은 투표를 받은
        최고의 명대사를 뽑는 <b>릴레이 소설 프로젝트</b>
        입니다.
        <br />
        지금 바로 참여해 명대사의 작가가 되어보세요 !
        <br />
        <span>(명대사 작가가 되신 분께는 소정의 선물을 증정합니다.)</span>
      </p>
      <main className='main'>
        <div className='rules_box mb20'>
          <h3 className='text_center mb20'>최고의 한 줄 규칙</h3>
          <ol className='rules'>
            <li>1. 가장 최근에 작성된 순대로 최대 5문장까지 볼 수 있다.</li>
            <li>2. 현재 진행된 내용과 어울리도록 문장을 잇는다.</li>
            <li>3. 사회적 규범과 예절에 맞게 작성한다.</li>
            <li>4. 하루에 한 번만 작성할 수 있다.</li>
            <li>5. 작성 완료된 내용은 수정할 수 없다.</li>
            <li>6. 마음에 드는 문장에 좋아요를 눌러 투표할 수 있다.</li>
          </ol>
        </div>
        <button className='button'>한 줄 쓰기</button>
      </main>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 400px;
          height: 100%;
          margin: 100px auto;
        }

        .description span {
          color: #777;
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rules_box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          border-radius: 15px;
          background-color: #eee;
        }

        .button {
          margin: 0 auto;
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
      `}</style>
    </div>
  );
}
