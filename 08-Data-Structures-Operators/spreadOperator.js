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
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
};

const arr = [3, 4];
const newArr = [1, 2, ...arr]; // Spread Operator expands array into individuals elements
console.log(newArr); // [1, 2, 3, 4]
console.log(...newArr); // 1 2 3 4

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow copy array (not deep)
const array = [1, 2, [3, 4]];
const copyArray = [...array];
copyArray[0] = 0;
console.log(array, copyArray);

// Deep copy array
const deepCopyArray = JSON.parse(JSON.stringify(array));
deepCopyArray[2][1] = 10;
console.log(array, deepCopyArray);

// Iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Tom';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['T', 'o', 'm', ' ', 'S.']

// Method Example
const ingredients = ['mushrooms', 'aspargus', 'cheese'];
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Shallow Copy Object
const copyRestaurant = { ...restaurant };
copyRestaurant.name = 'Ristorante Roma';
console.log(restaurant, copyRestaurant);
