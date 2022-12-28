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


// Basic Array Operations (Methods)
const names = ['Bob', 'Nic'];

const newLengthPush = names.push('Tom'); // 3
console.log(names, newLengthPush);

const newLengthUnshift = names.unshift('Jay'); // 4
console.log(names, newLengthUnshift);

const lastElement = names.pop(); // 'Tom'
console.log(names, lastElement);

const firstElement = names.shift(); // 'Jay'
console.log(names, firstElement);

function reverseArray(array, option) {
  const reversedArray = [];
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (option === 'pop') {
      const lastElement = array.pop();
      reversedArray.push(lastElement);
    } else if (option === 'shift') {
      const lastElement = array.shift();
      reversedArray.unshift(lastElement);
    } else {
      console.log("Second argument have to be 'pop' or 'shift'");
      return array;
    }
  }

  array = reversedArray;
  return array;
}

const testArray = [1, 2, 3, 4, 5];
console.log(testArray);
console.log(reverseArray(testArray, 'shift')); // [5, 4, 3, 2, 1]

const indexElement = names.indexOf('Bob'); // 0
const noElement = names.indexOf('noElement'); // -1
console.log(names, indexElement, noElement);

const isElementExist = names.includes('Bob'); // true
const isElementExist2 = names.includes('noElement'); // false
console.log(names, isElementExist, isElementExist2); // strict equality: includes ===


// Introduction to Objects
const exampleArray = [
  'Tom',
  'Mitch',
  2022 - 2000,
  'teacher',
  ['Lui', 'Bob']
];

const exampleObject = {
  firstName: 'Tom',
  lastName: 'Mitch',
  age: 2022 - 2000,
  job: 'teacher',
  friends: ['Lui', 'Bob']
};

// Dot & Bracket notation 
console.log(exampleObject.firstName);
console.log(exampleObject['firstName']);
console.log(exampleObject['first' + 'Name']);

const input = 'noProperty';
// const input = prompt('Choose property:');
console.log(exampleObject.input); // undefined, because of obj doesn't have input property
console.log(exampleObject[input]);
if (exampleObject[input]) {
  console.log(exampleObject[input], 1111111);
} else {
  console.log(`obj doesn't have '${input}' property`);
}

exampleObject.location = 'London';
exampleObject['isMarried'] = false;

console.log(`${exampleObject.firstName} has ${exampleObject.friends.length} friends`);
console.log(`${exampleObject['firstName']} has ${exampleObject['friends'].length} friends`);


// Object Methods
const exampleObj = {
  firstName: 'Tom',
  birthYear: 2000,
  hasDriversLicense: false,
  calcAge: function(birthYear) {
    return 2022 - birthYear;
  },
  calcAge2: function() {
    return 2022 - this.birthYear;
  },
  calcAge3: function() {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    const summary = `${this.firstName} ${this.hasDriversLicense ? "has" : "hasn't"} license`;
    return summary;
  }
};

console.log(exampleObj.calcAge(exampleObj.birthYear));
console.log(exampleObj['calcAge'](exampleObj.birthYear));
console.log(exampleObj.calcAge2());
console.log(exampleObj.calcAge3());
console.log(exampleObj.age);
console.log(exampleObj.getSummary());