'use strict';

// Classes in JS are just syntatic sugar (still implement prototypal inheritance)

// Class Expression ⬇️
// const Person = class {};

// Class Declaration ⬇️
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property (prototypal inheritance)
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    name.includes(' ')
      ? (this._fullName = name)
      : alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const tom = new Person('Tom Builder', 2003);
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

// <-- Setters and Getters -->
console.log(tom.age); // 20

const bob = new Person('Bob', 1950); // alert: Bob is not a full name!
console.log(bob); // fullName: undefined, birthYear: 1950
