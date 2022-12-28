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


// Functions calling other functions
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function cutFruitPieces(fruit) {
  return fruit * getRandomInt(3, 6);
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
}
console.log(fruitProcessor2(2, 3));


// Reviewing Functions
const calcAge = function(birthYear) {
  return 2022 - birthYear;
}

const yearsUntilRetirement2 = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} is already retired`);
    return -1;
  }
}
yearsUntilRetirement2(2000, 'Tom');


// Introduction to Arrays
const friends = ['Tom', 'Bob', 'Nic']; // literal syntax
const years = new Array(1991, 2000, 2010);
const bot = ['name', 'descr', 20, false, years];
console.log(friends, years);
console.log(friends[0], friends[friends.length - 1]);

const calcAge4 = function(birthYear) {
  return 2037 - birthYear;
};

for (let year of years) {
  console.log(calcAge4(year));
}

for (let i = 0; i < years.length; i++) {
  console.log(calcAge4(years[i]));
}

function calcAge5(...yearss) {
  for (let year of yearss) {
    console.log(2037 - year);
  }
}

calcAge5(...years);