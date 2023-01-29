'use strict';

const Person = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const tom = Object.create(Person);
tom.firstName = 'Tom';
tom.birthYear = 2000;
tom.calcAge(); // 23
console.log(tom.__proto__ === Person); // true

const bob = Object.create(Person);
bob.init('Bob', 2010);
console.log(bob); // {firstName: 'Bob', birthYear: 2010}

// <-- Inheritance Between 'Classes': Object.create -->
console.clear();

const Human = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log(2023 - this.birthYear);
  }
};

const steven = Object.create(Human);
const Student = Object.create(Person);

Student.init = function (firstName, birthYear, course) {
  Human.init.call(this, firstName, birthYear);
  this.course = course;
};

Student.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(Student);
jay.init('Jay', 2000, 'Front-end');
jay.introduce(); // My name is Jay and I study Front-end
jay.calcAge(); // 23

console.dir(jay);
