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

// <-- The Magic of Chaining Methods -->

// PIPELINE
const euroToUSD = 1.1;
const totalDepositsUSD = movements
  .filter((movement) => movement > 0)
  .map((movement) => movement * euroToUSD)
  .reduce((acc, movement) => acc + movement, 0);

console.log(totalDepositsUSD); // 803.0000000000001

// <-- The find Method -->
console.clear();
console.log(movements); // [200, -200, 430, -400, 100]

// find returns firrst element in the array that satisfies condition
const firstWithdrawal = movements.find((movement) => movement < 0);
console.log(firstWithdrawal); // -200

const workers = [
  { name: 'Bob', age: 29 },
  { name: 'Tom', age: 42 },
  { name: 'Kim', age: 23 }
];
const tom = workers.find((worker) => worker.name === 'Tom');
console.log(tom); // {name: 'Tom', age: 42}

// <-- some and every -->
console.clear();
console.log(movements); // [200, -200, 430, -400, 100]

// equality
console.log(movements.includes(-200)); // true

// some: condition
console.log(movements.some((movement) => movement > 5000)); // false

// every: condition
console.log(movements.every((movement) => movement < 1000)); // true

// Separate callback
const deposit = (movement) => movement > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [200, 430, 100]

// <-- flat and flatMap -->
console.clear();

const array = [[1, 2], [3, 4], 5];
console.log(array.flat()); // [1, 2, 3, 4, 5]

const deepArray = [[1, [2, 3]], [[4, 5], 6], 7];
console.log(deepArray.flat()); // [1, [2, 3], [4, 5], 6, 7]
console.log(deepArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7]

const accounts = [
  { name: 'Tom', movements: [40, 10, 50] },
  { name: 'Bob', movements: [70, 20, 30] },
  { name: 'Kim', movements: [20, 70, 10] }
];

// const accountMovements = accounts.map((account) => account.movements);
// console.log(accountMovements); // [[40, 10, 50], [70, 20, 30], [20, 70, 10]]
// const allMovements = accountMovements.flat();
// console.log(allMovements); // [40, 10, 50, 70, 20, 30, 20, 70, 10]
// const overalBalance = allMovements.reduce((acc, movement) => acc + movement, 0);
// console.log(overalBalance); // 320

const overalBalance = accounts
  .map((account) => account.movements)
  .flat()
  .reduce((acc, movement) => acc + movement, 0);
console.log(overalBalance); // 320

// flatMap method combines map and flat methods into one method (better for performance)
const overalBalanceFlatMap = accounts
  .flatMap((account) => account.movements) // only 1 level deep
  .reduce((acc, movement) => acc + movement, 0);
console.log(overalBalanceFlatMap); // 320
