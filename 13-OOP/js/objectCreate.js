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
