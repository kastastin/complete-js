'use strict';

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // miss 's' without strict mode -> no error
if (hasDriversLicense) console.log('I can drive');
// const interface = 'test'; // strict mode -> SyntaxError (reserved word)


// Functions
function logger() {
  console.log('executed code by function logger');
}
logger(); // calling/running/invoking function

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples & ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 7));


// Function Declarations vs Expressions
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(2000);
console.log(age1);

// function expression
const calcAge2 = function(birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2000);
console.log(age2);


// Arrow Functions
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement('Tom', 2002));