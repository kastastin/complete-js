'use strict';

// Coding Challenge #1
const calcAverage = (a, b, c) => Math.round((a + b + c) / 3);

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins won (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas won (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`Dolphins/Koalas | Draw | ${avgDolphins}/${avgKoalas}`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);