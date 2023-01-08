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

// REST pattert collects elements that are unused in the destructing assignment

// <-- Destructuring -->

// SPREAD, because of RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4];
console.log(a, b, others); // 1 2 [3, 4]

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, rissoto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// <-- Functions -->
const getSum = function (...numbers) {
  const initialValue = 0;
  const sum = numbers.reduce(
    (accumulator, currValue) => accumulator + currValue,
    initialValue
  );
  console.log(sum);
};
getSum(1, 1); // 2
getSum(1, 1, 1); // 3
getSum(1, 1, 1, 1); // 4

const testArray = [5, 5, 5];
getSum(...testArray); // 15

// Method
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('cheese');
