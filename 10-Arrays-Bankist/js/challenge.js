'use strict';

// <-- Coding Chalenge #1 -->

const juliaAges = [3, 5, 2, 12, 7];
const kateAges = [4, 1, 15, 8, 3];

const checkDogs = function (firstArr, secondArr) {
  const ages = firstArr.slice(1, -2).concat(secondArr);
  ages.forEach(function (age, index) {
    const isAdult = age > 2 ? 'adult' : 'puppy';
    console.log(`Dog #${index + 1}: ${age} [${isAdult}]`);
  });
};
checkDogs(juliaAges, kateAges);
