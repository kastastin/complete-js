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

// <-- Inheritance Between 'Classes': Constructor Functions -->
console.clear();

const Human = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Human.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Human.prototype is __proto__ of Student.prototype
Student.prototype = Object.create(Human.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();
mike.calcAge(); // 23
console.log(mike); // Human

console.log(mike instanceof Student); // true
console.log(mike instanceof Human); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // Student (was Human without ⬆️)
