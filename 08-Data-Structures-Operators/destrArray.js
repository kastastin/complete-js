'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

const arr = [1, 2, 3];
const [x, y, z] = arr; // Destructuring Array
const [a, , b] = arr; // Destructuring Array (1 & 3 elem)
console.log(x, y, z);
console.log(a, b);

const [address, city, country] = restaurant.location.split(', ');
console.log(address, city, country);

let [main, secondary] = restaurant.categories;
const temp = main;
main = secondary;
secondary = temp;
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starterMenu, mainMenu] = restaurant.order(0, 0);
console.log(starterMenu, mainMenu);

// Nested Destructuring
const nested = [0, [1, 1], 0];
// const [, i, j] = nested;
// console.log(i, j); // [1, 1] 0
const [, [i, j], k] = nested;
console.log(i, j, k); // 1 1 0

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
