'use strict';

const body = document.querySelector('body');
const randomNumberElement = document.querySelector('.number');
const inputElement = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const attemptElement = document.querySelector('.attempt');
const worstAttemptElement = document.querySelector('.worstAttempt');
const nGamesElement = document.querySelector('.nGames');

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let attempt = 0;
let worstAttempt = localStorage.getItem('worstAttempt') || 0;
let nGames = localStorage.getItem('nGames') || 0;

// <-- Local Storage -->
worstAttemptElement.textContent = localStorage.getItem('worstAttempt');
nGamesElement.textContent = localStorage.getItem('nGames');

const displayMessage = function (message) {
  messageElement.textContent = message;
};

// <-- Game Logic -->
const checkBtnHandler = function () {
  const input = +inputElement.value;

  if (input < 1 || input > 20) {
    inputElement.value = 0;
    displayMessage('Enter between 1 and 20!');
  } else if (input === randomNumber) {
    body.style.backgroundColor = '#60b347';
    randomNumberElement.style.width = '30rem';
    displayMessage('🥳 Correct Number!');
    randomNumberElement.textContent = randomNumber;
    nGames++;
    attempt++;
    inputElement.readOnly = true;
    checkBtn.hidden = true;
    checkBtn.removeEventListener('click', checkBtnHandler);
  } else if (input !== randomNumber) {
    input > randomNumber
      ? displayMessage('📈 Too high!')
      : displayMessage('📉 Too low!');
    attempt++;
  }

  attemptElement.textContent = attempt;
  worstAttempt = worstAttempt < attempt ? attempt : worstAttempt;
  worstAttemptElement.textContent = worstAttempt;
  localStorage.setItem('worstAttempt', worstAttempt);
  nGamesElement.textContent = nGames;
  localStorage.setItem('nGames', nGames);
};

// <-- Check Button Event Listener -->
checkBtn.addEventListener('click', checkBtnHandler);

const inputHandler = function (e) {
  let input = e.target.value;
  if (input.length > 2) {
    e.target.value = input.slice(0, 2);
  }
};

// <-- Input Event Listener -->
inputElement.addEventListener('input', inputHandler);

// <-- Again Button Event Listener -->
againBtn.addEventListener('click', function () {
  location.reload();
});
