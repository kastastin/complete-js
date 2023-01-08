'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }
};

// Destructuring Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructuring Object with another variable name
const { categories: tags, openingHours: hours } = restaurant;
console.log(tags, hours);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 10;
let b = 20;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj); // necessarily use parentheses
console.log(a, b); // 1, 2

// Nested Objects
// const {fri: {open, close}} = restaurant.openingHours;
const {
  fri: { open: fridayOpen, close: fridayClose }
} = restaurant.openingHours;
console.log(fridayOpen, fridayClose); // 11 23

// Method orderDelivery
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 0
});
