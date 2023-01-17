'use strict';

const arr = [10, -20, 30];

const eurToUSD = 1.1;
const arrUSD = arr.map(function (elem) {
  return elem * eurToUSD;
});
const arrUSDArrow = arr.map((elem) => elem * eurToUSD);
console.log(arr, arrUSD, arrUSDArrow); // [10, 20, 30] [11, 22, 33] [11, 22, 33]

const arrDescriptions = arr.map((elem, index) => {
  const isPositive = elem > 0 ? 'positive' : 'negative';
  return `elem ${index}: ${elem} (${isPositive})`;
});
console.log(arrDescriptions);

// <-- The filter Method -->

const movements = [200, -200, 430, -400, 100];

const depositFor = [];
for (const movement of movements) {
  if (movement > 0) {
    depositFor.push(movement);
  }
}
console.log(depositFor); // [200, 430, 100]

const deposits = movements.filter((movement) => movement > 0);
console.log(deposits); // [200, 430, 100]

const withdrawals = movements.filter(function (movement) {
  return movement < 0;
});
console.log(withdrawals); // [-200, -400]

// <-- The reduce Method -->
console.clear();
console.log(movements); // [200, -200, 430, -400, 100]

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, curr, index, arr) {
  console.log(`Iteration ${index}: ${acc}`);
  return acc + curr;
}, 0);
console.log(balance); // 130

let balanceFor = 0;
for (const movement of movements) {
  balanceFor += movement;
}
console.log(balanceFor); // 130

const balanceArrow = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balanceArrow); // 130

// Max value (reduce)
const maxMovement = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);
console.log(maxMovement); // 430
