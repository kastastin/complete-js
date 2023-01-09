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
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main Ingredient: ${mainIngredient}`);
    console.log(
      `Other Ingredients: ${
        otherIngredients.length ? otherIngredients.join(', ') : '...'
      }`
    );
  }
};

const rest1 = {
  name: 'Capri',
  numGuests: 20,
  numWorkers: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};

// <-- OR assignment operator -->

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1.numGuests, rest2.numGuests); // 20 10

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1.numGuests, rest2.numGuests); // 20 10

// <-- Nullish assignment operator -->
rest1.numWorkers ??= 20; // ?? check null or undefined
console.log(rest1.numWorkers); // 0

// <-- AND assignment operator -->
rest1.owner &&= '<ANONYMOUS>'; // undefined
rest2.owner &&= '<ANONYMOUS>'; // <ANONYMOUS>
console.log(rest1.owner, rest2.owner);
