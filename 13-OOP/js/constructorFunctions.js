'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this (create a thousand copies)
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const tom = new Person('Tom', 2000);
const bob = new Person('Bob', 2010);
console.log(tom, bob);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(tom instanceof Person); // true
console.log([1, 2] instanceof Array); // true
