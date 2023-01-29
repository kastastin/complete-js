'use strict';

// <-- Coding Challenge #1 -->
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.displaySpeed();
};

Car.prototype.brake = function () {
  this.speed -= 5;
  this.displaySpeed();
};

Car.prototype.displaySpeed = function () {
  console.log(`${this.make} speed: ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
bmw.accelerate(); // BMW speed: 130 km/h
bmw.brake(); // BMW speed: 125 km/h

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate(); // Mercedes speed: 105 km/h
mercedes.brake(); // Mercedes speed: 100 km/h

// <-- Coding Challenge #2 -->
console.clear();

class Vehicle {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    this.displaySpeed();
  }

  brake() {
    this.speed -= 5;
    this.displaySpeed();
  }

  displaySpeed() {
    console.log(`${this.make} speed: ${this.speed} km/h`);
  }

  get speedUS() {
    return (this.speed / 1.6).toFixed(1) + ' mi/h';
  }

  set speedUS(speed) {
    this.speed = (speed * 1.6).toFixed(1);
  }
}

const ford = new Vehicle('Ford', 120);
console.log(ford.speedUS);

ford.speedUS = 50;
ford.displaySpeed();
