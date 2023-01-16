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
