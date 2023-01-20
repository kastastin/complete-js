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
