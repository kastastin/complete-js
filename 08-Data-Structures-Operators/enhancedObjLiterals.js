'use strict';

const str = 'day';
const dayType = ['workweek', 'weekend'];

const openingHours = {
  [dayType[0]]: {
    open: 11,
    close: 19
  },
  [dayType[1]]: {
    open: 10,
    close: 20
  },
  [`full-${str}`]: {
    open: 0,
    close: 24
  }
};

const shop = {
  numWorkers: 3,
  location: 'Via Angelo Tavanti 23',

  // Before ES6 syntax
  // openingHours: openingHours,
  // printLocation: function() {
  //   console.log(this.location);
  // },

  // ES6 enhaced object literals
  openingHours,
  // In ES6 we no longer have to create a property and then set to a function expression
  printLocation() {
    console.log(this.location);
  }
};
console.log(shop);

// In ES6 we no longer have to create a property and then set to a function expression
