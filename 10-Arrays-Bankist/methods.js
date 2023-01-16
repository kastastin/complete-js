'use strict';

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

// <-- The new 'at' method -->

const testArr = [1, 2, 3];

console.log(testArr[0]); // 1
console.log(testArr.at(0)); // 1

// getting last array or string element
console.log(testArr[testArr.length - 1]); // 3
console.log(testArr.slice(-1)[0]); // 3
console.log(testArr.at(-1)); // 3
console.log('Tom'.at(-1)); // m

// <-- Looping Arrays: forEach -->

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forEach does not have break and continue
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`${index + 1}. Your deposit: ${movement}`);
  } else {
    console.log(`${index + 1}. Your withdraw: ${Math.abs(movement)}`);
  }
});
