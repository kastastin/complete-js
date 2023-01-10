'use strict';

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 0, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(`Main Ingredient: ${mainIngredient}`);
    console.log(
      `Other Ingredients: ${
        otherIngredients.length ? otherIngredients.join(', ') : '...'
      }`
    );
  }
};

// <-- Property NAMES -->
console.log(Object.keys(openingHours)); // ['thu', 'fri', 'sat']
for (const day of Object.keys(openingHours)) console.log(day);

// <-- Property VALUES -->
console.log(Object.values(openingHours)); // [{...}, {...}, {...}]
for (const day of Object.values(openingHours)) console.log(day);

// <-- Object Entries -->
console.log(Object.entries(openingHours)); // [['thu', {open: 12, close: 22}], [...], [...]]

const entries = Object.entries(openingHours);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
