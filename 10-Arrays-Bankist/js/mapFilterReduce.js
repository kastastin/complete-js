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
