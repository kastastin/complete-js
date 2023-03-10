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


// Truthy & Falsy values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean({})); // true

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log('Height is defined');
} else {
  console.log('Height is undefined');
}


// Equality Operators: loose/strict: == vs ===
const strAge = '18';
const numAge = 18;
if (strAge === 18) console.log(`Age: ${strAge} (strict)`); // false
if (strAge == 18) console.log(`Age: ${strAge} (loose)`);
if (numAge === 18) console.log(`Age: ${numAge} (strict)`);
if (numAge == 18) console.log(`Age: ${numAge} (loose)`);

// const input = +prompt('Enter number:');
const input = 1;
console.log(input);

if (input === 10) {
  console.log('ok 10');
} else if (input === 5) {
  console.log('ok 5');
} else {
  console.log('block else');
}

if (input !== 100) console.log('not 100');


// Logical operators
function checkBool(firstOperand, logicalOperator, secondOperand) {
  result = '';
  if (logicalOperator === '&&') {
    result = firstOperand && secondOperand;
  } else if (logicalOperator === '||') {
    result = firstOperand || secondOperand;
  }
  console.log(`${firstOperand} ${logicalOperator} ${secondOperand} -> ${result}`);
}

checkBool(true, '&&', true); // true
checkBool(true, '&&', false); // false
checkBool(true, '||', true); // true
checkBool(true, '||', false); // true
checkBool(false, '||', false); // false


// The switch statement
let output = '';
function fillOutput(currentDay) {
  output = `Today is ${currentDay}`;
}

const day = 'Thursday';
switch(day) {
  case 'Monday':
    fillOutput('Monday');
    break;
  case 'Tuesday':
    fillOutput('Tuesday');
    break;
  case 'Wednesday':
  case 'Thursday':
    fillOutput('Wednesday or Thursday');
    break;
  default:
    output = 'Not a valid day'
}
console.log(output);


// The conditional (ternary) operator
const age = 15;
age >= 18 ? console.log('> 18') : console.log('< 18');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink); // water

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);