// Importing Module
// import add from './shoppingCart.js';
// add('apple', 2); // 2 apple added to cart

import {
  addToCart,
  totalPrice as price,
  totalQuantity,
  color
} from './shoppingCart.js';
import * as Shoppingcart from './shoppingCart.js';

console.log('Importing module');
// console.log(shoppingCost); // ReferenceError: shoppingCost is not defined

addToCart('bread', 5); // 5 bread added to cart
console.log(price, totalQuantity, color); // 237 23 'red'
console.log(Shoppingcart.color); // red
