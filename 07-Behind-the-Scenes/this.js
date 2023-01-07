'use strict';

console.log(this); // Window

const calcAgeExpression = function (birthYear) {
  console.log(2023 - birthYear, this);
};
calcAgeExpression(2000); // 23 undefined

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear, this);
};
calcAgeArrow(2000); // 23 Window -> Arrow function doesn't get its own 'this' keyword
// Arrow function uses the lexical 'this' keyword of its parent function or scope

const person = {
  year: 2000,
  calcAge: function () {
    console.log(this);
  }
};
person.calcAge(); // person obj

const test = {
  year: 3000
};
test.calcAge = person.calcAge; // method borrowing
test.calcAge(); // test obj

const f = person.calcAge;
f(); // undefined
