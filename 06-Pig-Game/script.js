'use strict';

// <-- Selecting Elements -->
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

// <-- Starting Conditions --> 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let rollCount = 0;

// <-- Rolling dice functionality --> 
btnRoll.addEventListener('click', function() {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `img/dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
    rollCount++;
    currRoll0El.textContent = rollCount;
  } else {
    
  }
});