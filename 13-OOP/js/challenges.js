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
    return this;
  }

  brake() {
    this.speed -= 5;
    this.displaySpeed();
    return this;
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

// <-- Coding Challenge #3 -->
console.clear();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} speed: ${this.speed}, charge: ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 50);
tesla.chargeBattery(80);
tesla.brake(); // Tesla speed: 115 km/h
tesla.accelerate(); // Tesla speed: 135, charge: 79 %

// <-- Coding Challenge #4 -->
console.clear();

class ElectricVehicle extends Vehicle {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  #displaySpeed() {
    console.log(
      `${this.make} speed: ${this.speed} km/h, charge: ${this.#charge}`
    );
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    this.#displaySpeed();
    return this;
  }
}

const rivian = new ElectricVehicle('Rivian', 120, 23);
console.log(rivian);
rivian.chargeBattery(20);
rivian.accelerate().brake();
rivian.chargeBattery(100).brake().accelerate();
