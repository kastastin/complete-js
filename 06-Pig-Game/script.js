'use strict';

// <-- Selecting Elements -->
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const currRoll0El = document.querySelector('#roll-count--0');
const currRoll1El = document.querySelector('#roll-count--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
const turns = [0, 0];
let currentScore = 0;
let rollCount = 0;
let activePlayer = 0;

// <-- Starting Conditions -->
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

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

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    rollCount++;
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
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  rollCount = 0;
  document.querySelector(`#roll-count--${activePlayer}`).textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', btnRollHandler);
btnHold.addEventListener('click', btnHoldHandler);
