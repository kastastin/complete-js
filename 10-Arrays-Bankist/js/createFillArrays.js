'use strict';

const literallyArray = [1, 2, 3, 4, 5];
const newArray = new Array(1, 2, 3, 4, 5);

// Empty arrays + fill method
const x = new Array(4);
console.log(x, x[0]); // [empty × 4] undefined
x.fill(1);
console.log(x); // [1, 1, 1, 1]
console.log(x.fill(2, 1)); // [1, 2, 2, 2]
console.log(x.fill(3, 1, 3)); // [1, 3, 3, 2]

// Array.from
const y = Array.from({ length: 5 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1]

const z = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(z); // [1, 2, 3, 4, 5]

const randomNumbers = Array.from(
  { length: 5 },
  (curr) => (curr = Math.trunc(Math.random() * 10) + 1)
);
console.log(randomNumbers); // [10, 1, 7, 4, 6]

// NodeList -> Array
const nodeListBtns = document.querySelectorAll('button');

const arraySliceBtns = Array.prototype.slice.call(nodeListBtns);
const arrayFromBtns = Array.from(nodeListBtns);
console.log(arraySliceBtns, arrayFromBtns); // [btn, btn, btn] [btn, btn, btn]
console.log([...arraySliceBtns]); // [btn, btn, btn]
