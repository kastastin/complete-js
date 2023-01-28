'use strict';

// Constructor Function
const Person = function (age) {
  this.age = age;
};

Person.printTest = function () {
  console.log('Test');
};
Person.printTest(); // Test

// Class
class Car {
  constructor(speed) {
    this.speed = speed;
  }

  static printTest() {
    console.log('Test');
  }
}
Car.printTest(); // Test
