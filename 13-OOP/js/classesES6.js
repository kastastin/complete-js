'use strict';

// Classes in JS are just syntatic sugar (still implement prototypal inheritance)

// Class Expression ⬇️
// const Person = class {};

// Class Declaration ⬇️
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property (prototypal inheritance)
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const tom = new Person('Tom', 2003);
console.log(tom.__proto__ === Person.prototype); // true
console.log(tom); // Person {firstName: 'Tom', birthYear: 2003}
tom.calcAge(); // 20

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstName}`);
};
tom.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citiez
// 3 Classes are executed in strict mode
