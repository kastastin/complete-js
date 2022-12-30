'use strict';

// <-- Find the smallest integer in the array (Codewars) -->
const arr = [78, 56, 232, 12, 8];

function findMinTest(args) {
  return Math.min(...args);
  // return Math.min.apply(null, args);
  // args.sort(function(a, b) {
  //   return a - b;
  // });
  // return args.sort((a, b) => a - b)[0];
}

console.log(findMinTest(arr));

const getRandom = (min, max) => Math.trunc(Math.random() * max) + min;
const array = [];
const size = 100;

for (let i = 0; i < size; i++) {
  array.push(getRandom(1, 1000000000));
}

function findMin(args, option) {
  switch (+option) {
    case 1: 
      return Math.min(...args);
    case 2:
      return Math.min.apply(null, args);
    case 3:
      return args.sort((a, b) => a - b)[0];
    default:
      console.log('Only 1, 2, 3 options');
  }
}

const startTime = new Date().getTime();
findMin(array, 3);
const endTime = new Date().getTime();
console.log(`Time: ${endTime - startTime} sec`); 