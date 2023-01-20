'use strict';

console.log(10 === 10.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(typeof Number('100')); // number
console.log(typeof +'100'); // number

// Parsing
console.log(Number.parseInt('50px', 10)); // 50
console.log(Number.parseInt('px50', 10)); // NaN
console.log(Number.parseFloat('2.5rem')); // 2.5

// Checking if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true

// Checking if value is number
console.log(Number.isFinite(50)); // true
console.log(Number.isFinite('50')); // false
console.log(Number.isFinite(+'50x')); // false
console.log(Number.isFinite(50 / 0)); // false

console.log(Number.isInteger(70)); // true
console.log(Number.isInteger(70.0)); // true
console.log(Number.isInteger(70 / 0)); // false

// <-- Math and Rounding -->
console.clear();

console.log(Math.sqrt(25), 25 ** (1 / 2)); // 5 5
console.log(Math.max(1, 2, 3), Math.max(...[1, 3, 2])); // 3 3
console.log(Math.min('1', 2, 3), Math.min(...['1x', 3, 2])); // 1 NaN

// Calculate the area of a circle
console.log((Math.PI * Number.parseFloat('10px') ** 2).toFixed(2)); // 314.16

// Random number
const randomInt = (min, max) => Math.trunc(Math.random() * max) + min;
console.log(randomInt(-1, -3));

// Rounding integers
console.log(Math.trunc(3.9)); // 3 -> remove any decimal part
console.log(Math.round(1.1)); // 1
console.log(Math.round(1.9)); // 2
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.9)); // 2
console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.9)); // 1

// Rounding decimals
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'
console.log(+(2.345).toFixed(2)); // '2.35'

// <-- The Remainder Operator -->
console.clear();

console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(6 % 2); // 0

const isEven = (n) => n % 2 === 0;
console.log(isEven(7)); // false
console.log(isEven(4)); // true

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//   });
// });
