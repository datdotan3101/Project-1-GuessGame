'use strict';

/**
 * 0. xác định các con số
 * 1. Thay đổi text cần thiết - Guess - Score
 * 2. Tạo number
 * 3. Score -1 if wrong
 */

let score = 20;

let secretNumber = Math.ceil(Math.random() * 20);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = document.querySelector('.guess').value * 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);

  if (!guessNumber) {
    // document.querySelector('.message').textContent = '⛔No number';
    displayMessage('⛔No number');
  } else if (guessNumber === secretNumber) {
    // document.querySelector('.message').textContent = '✅Correct number';
    displayMessage('✅Correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      // document.querySelector('.highscore').textContent = highscore;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guessNumber > secretNumber) {
    //   if (score > 0) {
    //     // document.querySelector('.message').textContent = 'Too high';
    //     displayMessage('Too high');
    //     score--;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game';
    //   }
    // } else if (guessNumber < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'Too low';
    //     score--;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game';
    //   }
  } else if (guessNumber !== secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? 'Too high' : 'Too low';
    }
    document.querySelector('.score').textContent = score;
  }
});

/**
 * Again
 *  - document = ?
 *  - new secret number
 *  - background
 *  - message start guessing
 *  - highscore
 */

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing....');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.ceil(Math.random() * 20);
});
