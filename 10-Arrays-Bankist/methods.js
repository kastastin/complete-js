'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']

// Shallow Copy
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// Splice (mutate original array)
console.log(arr.splice(-2)); // ['d', 'e']
console.log(arr); // ['a', 'b', 'c']

// Reverse (mutate original array)
const array = [1, 2, 3, 4, 5];
console.log(array.reverse()); // [5, 4, 3, 2, 1]
console.log(array); // [5, 4, 3, 2, 1]

// Concat
const anotherArray = [7, 6];
console.log(anotherArray.concat(array)); // [7, 6, 5, 4, 3, 2, 1]
console.log([...anotherArray, ...array]); // [7, 6, 5, 4, 3, 2, 1]
