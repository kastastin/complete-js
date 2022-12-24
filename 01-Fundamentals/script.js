// Type Conversion & Coercion

function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}

function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]';
}

function checkType(value) {
  if (isNumber(value)) {
    console.log(`${value} -> Number`);
  } else if (isString(value)) {
    console.log(`${value} -> String`);
  }
}

// type conversion
const inputYear = '1991';
console.log(typeof Number(inputYear), typeof inputYear);
console.log(inputYear + 10);
console.log(10 + inputYear);

console.log(Number('test')); // NaN
console.log(typeof NaN); // number

console.log(String(23));
console.log(isString('' + 23)); // true
console.log(isString(23 + '')); // true


// type coercion
console.log('test' + 100 + '!');
console.log('5' - '5' - 1); // -1 (number)  | operator '-' number
console.log('5' + '5' + 1); // 551 (string) | operator '+' string
console.log('23' / '2'); // 11.5 (number)
console.log('23' * '2'); // 46 (number)
console.log(2 * 'df'); // NaN
console.log(2 / 'df'); // NaN
console.log(1 + 4 + '1'); // 51 (string)
console.log('10' - '3' - 2 + '2'); // 52 (string)
console.log('10' - '3' - '2' + '2'); // 52 (string)

