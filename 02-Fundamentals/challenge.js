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


// Coding Challenge #2
const bills = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = function (bill) {
  const tipPercentage = (bill > 50 && bill < 300) ? 15 : 20;
  const tip = (bill * (tipPercentage / 100)).toFixed(2);
  return +tip;
};

for (let bill of bills) {
  const tip = calcTip(bill);
  tips.push(tip);
  total.push(bill + tip);
}
console.log(bills, tips, total);


// Coding Challenge #3
const mark = {
  fullName: 'Mark Miller',
  height: 1.69,
  weight: 78,
  calcBMI: function() {
    this.BMI = +(this.weight / this.height ** 2).toFixed(1);
    return this.BMI;
  }
};

const john = {
  fullName: 'John Smith',
  height: 1.95,
  weight: 92,
  calcBMI: function() {
    this.BMI = +(this.weight / this.height ** 2).toFixed(1);
    return this.BMI;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);
console.log(`Mark's BMI (${mark.BMI}) is ${mark.BMI > john.BMI ? 'more' : 'less'} than John's BMI (${john.BMI})`);