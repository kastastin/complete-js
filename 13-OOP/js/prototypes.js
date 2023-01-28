'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(`${this.firstName}: ${2023 - this.birthYear} y.o`);
};

console.log(Person.prototype); // {calcAge: ƒ, constructor: ƒ}

const gena = new Person('Gena', 2000);
gena.calcAge(); // Gena: 23 y.o

console.log(gena.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(gena.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(gena)); // true
console.log(Object.prototype.isPrototypeOf(Person)); // true

gena.__proto__.calcAge.call(gena); // Gena: 23 y.o

Person.prototype.species = 'Homo Sapiens';
console.log(gena); // {firstName: 'Gena', birthYear: 2000}
console.log(gena.species); // Homo Sapiens
console.log(gena.hasOwnProperty('firstName')); // true
console.log(gena.hasOwnProperty('species')); // false
