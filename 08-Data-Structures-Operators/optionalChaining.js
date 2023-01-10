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
      open: 10, // Open 24 hours
      close: 20
    }
  },

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

// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // TypeError

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // 11

// <-- ES2020 intoduced a great solution: 'Optional Chaining' -->
// if certain property does not exist -> returned undefined
// a?.b check 'a' for null or undefined
console.log(restaurant.openingHours.mon?.open); // if 'mon' exists -> can read 'open'

// Multiple optional chainings
console.log(restaurant.openingHours?.mon?.open); // undefined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, we are ${open ? `opened at ${open}` : 'closed'}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ['Focaccia', 'Pasta']
console.log(restaurant.noMethod?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// Arrays
const persons = [
  { firstName: 'Tom', age: 25 },
  { firstName: 'Bob', age: 30 }
];
console.log(persons[0]?.firstName); // Tom
console.log(persons[2]?.firstName); // undefined
console.log(persons[3]?.firstName ?? 'persons[3] does not exists'); // persons[3] does not exists
