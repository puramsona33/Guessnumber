'use strict';

// Selecting elements
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('#guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Game variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Display message function
const displayMessage = function (message) {
  messageEl.textContent = message;
};

// Check button functionality
checkBtn.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberEl.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff4757';
    }
  }
});

// Again button functionality
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessEl.value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});

// Allow Enter key to submit guess
guessEl.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkBtn.click();
  }
});