'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let message = document.querySelector('.message');
let correctNumber = document.querySelector('.number');
let scoreText = document.querySelector('.score');
let highScoreText = document.querySelector('.highscore');
let body = document.querySelector('body');
let guess = document.querySelector('.guess');

function diplsayMessage(element, msg) {
  element.textContent = msg;
}

checkBtn.addEventListener('click', function () {
  let guessNum = Number(guess.value);

  // When there is no input
  if (!guessNum) {
    diplsayMessage(message, '⛔No number!');

    // When players wins
  } else if (guessNum === secretNumber) {
    diplsayMessage(message, '🎉 Correct Number!');
    if (score > highscore) {
      highscore = score;
      diplsayMessage(highScoreText, highscore);
    }
    body.style.backgroundColor = '#60b347';
    correctNumber.style.width = '30rem';
    diplsayMessage(correctNumber, secretNumber);

    // When guess is wrong
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      diplsayMessage(
        message,
        guessNum > secretNumber ? '📈 Too high! ' : '📉 Too low! '
      );
      score--;
      diplsayMessage(scoreText, score);
    } else {
      diplsayMessage(message, '💥 You lost the game!');
      diplsayMessage(scoreText, 0);
    }
  }
});
againBtn.addEventListener('click', function () {
  score = 20;
  diplsayMessage(scoreText, 20);
  diplsayMessage(correctNumber, '?');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  diplsayMessage(message, 'Start guessing...');
  body.style.backgroundColor = '#222';
  correctNumber.style.width = '15rem';
  guess.value = '';
});
