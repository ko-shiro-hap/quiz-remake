'use strict';

{
  const questions = [
    '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    '約28万人',
    '約79万人',
    '約183万人',
  ];

  // 変数・定数
  const btn = document.querySelectorAll(".answer__item");
  const correct = document.querySelector('.judgement__correct');
  // const correct = document.getElementById('correct');
  const wrong = document.querySelector('.judgement__wrong');
  // const wrong = document.getElementById('wrong');
  let btnClicked;
  // 繰り返し処理必要
  const q1Answer = questions[1];


  // ボタンからHTMLを取得
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      const answer = e.innerHTML;

      if(btnClicked !== true) {
        e.classList.add('js__selected');
        if(answer === q1Answer) {
          correct.classList.add('js__correct');
        }
        else {
          wrong.classList.add('js__wrong');
        };
      };

      btnClicked = true;
    });
  });
}

