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

// <-- Numeric Separators -->
console.clear();

const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const priceCents = 345_99;
console.log(priceCents); // 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(transferFee1, transferFee2); // 1500 1500

const PI = 3.14_15;
console.log(PI); // 3.1415

console.log(Number('230_000')); // NaN
console.log(Number.parseInt('230_000')); // 230

// <-- Working with BigInt -->
console.clear();

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(4792832842984928329328394921); // 4.792832842984928e+27
console.log(4792832842984928329328394921n); // 4792832842984928329328394921n
console.log(BigInt(4792832842984928329328394921)); // 4792832842984928128844955648n (use with small)

// Operations
console.log(10000n + 10000n); // 20000n
const huge = 2049384934830304348n;
const num = 23;
// console.log(huge * num); // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num)); // 47135853501097000004n

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == 20); // true
console.log(20n == '20'); // true
console.log(typeof 20n); // bigint

// Divisions
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335

// <-- Creating Dates -->
console.clear();

console.log(new Date()); // Sun Jan 22 2023 13:16:54 GMT+0200 (Eastern European Standard Time)
console.log(new Date('Jan 22 2023 13:16:54'));
console.log(new Date('December 24 2015')); // Thu Dec 24 2015 00:00:00 GMT+0200
console.log(new Date('2019-11-18T21:31:17.178Z')); // Mon Nov 18 2019 23:31:17 GMT+0200
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0200
console.log(new Date(2037, 10, 33)); // Thu Dec 03 2037 00:00:00 GMT+0200

console.log(new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 03:00:00 GMT+0300

// Working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
future.setFullYear(2040);
console.log(future.getFullYear()); // 2040
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 5
console.log(future.toISOString()); // 2037-11-19T13:23:05.000Z
console.log(future.getTime()); // 2142249785000
console.log(new Date(2142249785000)); // Thu Nov 19 2037 15:23:05 GMT+0200
console.log(Date.now()); // 1674388056979

// <-- Operations with Dates -->
console.clear();

const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(Number(futureDate)); // 2142249780000

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1); // 10

// <-- Internationalizing Numbers (Intl) -->

const number = 3884764.23;
console.log('US:', new Intl.NumberFormat('en-US').format(number)); // US: 3,884,764.23
console.log('Germany:', new Intl.NumberFormat('de-DE').format(number)); // Germany: 3.884.764,23
console.log('Syria:', new Intl.NumberFormat('ar-SY').format(number)); // Syria: ٣٬٨٨٤٬٧٦٤٫٢٣
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language).format(number)
);

const options = {
  style: 'unit',
  unit: 'mile-per-hour'
  // useGrouping: false
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(number)); // US: 3,884,764.23 mph
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(number)); // 3.884.764,23 mi/h
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(number));
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language, options).format(number)
);
