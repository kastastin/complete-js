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

// <-- Prototypal Inheritance on Built-In-Objects -->
console.clear();

// Object.prototype (top of prototype chain)
console.log(gena.__proto__);
console.log(gena.__proto__.__proto__);
console.log(gena.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 3, 2, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

// Example
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); // [1, 2, 3]

const h1 = document.querySelector('h1');
console.log(h1.__proto__); // HTMLHeadingElement
console.log(h1.__proto__.__proto__); // HTMLElement
console.log(h1.__proto__.__proto__.__proto__); // Element
console.log(h1.__proto__.__proto__.__proto__.__proto__); // Node
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // Object

const fn = (x) => x + 1;
console.log(fn.__proto__); // f
console.log(fn.__proto__.__proto__); // Object
console.log(fn.__proto__.__proto__.__proto__); // null
