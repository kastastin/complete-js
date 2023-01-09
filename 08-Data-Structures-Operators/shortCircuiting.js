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

// <-- Logical Operators use ANY data type, return ANY data type, short-circuiting -->

// Operator || return first true value or last false value if all false
console.log(3 || 'Tom'); // 3
console.log('' || 'Tom'); // Tom
console.log(true || 0); // true
console.log(undefined || null); // null -> no short circuiting

// Example || Operator
const guest11 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest11); // 10

restaurant.numGuests = 5;
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 5

// Operator && return last true value or first false value if all false
console.log('-- && --');
console.log(3 && 'Tom'); // Tom
console.log('' && 'Tom'); // ''
console.log(true && 0); // 0
console.log(undefined && null); // undefined

console.log('str1' || 20 || null || 'str2'); // str1 -> first true value
console.log('str1' && 20 && null && 'str2'); // null -> first false value

// Example && Operator
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'cheese', 'spinach');
}

// if method orderPizza exists -> call the method
restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'cheese', 'spinach');
