'use strict';

const person = {
  firstName: 'Tom',
  year: 2000,
  calcAge: function () {
    console.log(2023 - this.year);

    const self = this;
    const isAdult = function () {
      console.log(self.year <= 2005);
    };
    isAdult(`isAdult: ${isAdult}`);
  },
  greet: () => console.log(`Hey ${this.firstName}`)
};

person.greet(); // Hey undefined
person.calcAge();

// <-- Argument Keyword -->

const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(1, 1);

const addArrow = (a, b) => {
  console.log(arguments); // RefErr:Arguments is not defined => Arrow Functions don't have arguments
  return a + b;
};
addArrow(1, 1);
