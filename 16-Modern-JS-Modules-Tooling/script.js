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

// <-- Top-level await (ES2022) -->
// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data)

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
// console.log(lastPost); // Promise {<pending>}

// Not very clean
// lastPost.then((last) => console.log(last)); // {...}

const lastPost2 = await getLastPost();
// console.log(lastPost2); // {...}

// <-- Implementation of The Module Pattern -->
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  };
})();

ShoppingCart2.addToCart('toy', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2); // {...}
console.log(ShoppingCart2.shippingCost); // undefined
