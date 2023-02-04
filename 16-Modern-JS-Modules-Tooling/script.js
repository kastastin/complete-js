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
console.log(lastPost); // Promise {<pending>}

// Not very clean
lastPost.then((last) => console.log(last)); // {...}

const lastPost2 = await getLastPost();
console.log(lastPost2); // {...}
