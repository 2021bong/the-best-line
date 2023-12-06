export default function WritingRules() {
  const writingRules = [
    '가장 최근에 작성된 순대로 최대 5문장까지 볼 수 있다.',
    '현재 진행된 내용과 어울리도록 문장을 잇는다.',
    '사회적 규범과 예절에 맞게 작성한다.',
    '하루에 한 번만 작성할 수 있다.',
    '작성 완료된 내용은 수정할 수 없다.',
    '마음에 드는 문장에 좋아요를 눌러 투표할 수 있다.',
  ];
  return (
    <div className='rules_box mb20'>
      <h3 className='text_center mb20'>최고의 한 줄 규칙</h3>
      <ol className='rules_box'>
        {writingRules.map((rule, i) => (
          <li key={rule}>{i + 1 + '. ' + rule}</li>
        ))}
      </ol>
    </div>
  );
}
