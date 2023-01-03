'use strict';

const guessElement = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const checkBtn = document.querySelector('.check');

const checkInput = function (input) {
  if (+input < 1 || +input > 20) {
    messageElement.textContent = 'Enter between 1 and 20!';
    guessElement.value = 0;
    return 0;
  }
  return input;
};

const guessBtnHandler = function () {
  messageElement.textContent = '🥳 Correct Number!';
  const input = guessElement.value;
  const guess = checkInput(input);
  console.log(guess, typeof guess);
};

// <-- Guess Button Event Listener -->
checkBtn.addEventListener('click', guessBtnHandler);

const inputHandler = function (e) {
  let input = e.target.value;
  if (input.length > 2) {
    e.target.value = input.slice(0, 2);
  }
};

// <-- Input Event Listener -->
guessElement.addEventListener('input', inputHandler);
