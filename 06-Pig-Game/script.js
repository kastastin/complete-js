'use strict';

// <-- Selecting Elements -->
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const turns = [0, 0];
const scores = [0, 0];
let rollCount = 0;
let currentScore = 0;
let activePlayer = 0;

// <-- Rolling dice functionality -->
function btnRollHandler() {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  turns[activePlayer]++;
  document.querySelector(`#turn--${activePlayer}`).textContent =
    turns[activePlayer];

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `img/dice-${dice}.png`;

  if (dice !== 1) {
    rollCount++;
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    document.querySelector(`#roll-count--${activePlayer}`).textContent =
      rollCount;
  } else {
    switchPlayer();
  }
}

function btnHoldHandler() {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    // Finish the game
    diceEl.classList.add('hidden');
    btnRoll.removeEventListener('click', btnRollHandler);
    btnHold.removeEventListener('click', btnHoldHandler);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  rollCount = 0;
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`#roll-count--${activePlayer}`).textContent = 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}

btnNew.addEventListener('click', () => location.reload());
btnRoll.addEventListener('click', btnRollHandler);
btnHold.addEventListener('click', btnHoldHandler);
