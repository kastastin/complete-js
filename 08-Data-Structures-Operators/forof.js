'use strict';

// break and continue can use in for of loop

const arr = ['one', 'two', 'three'];
for (let elem of arr) console.log(elem); // 'one', 'two', 'three'

for (let elem of arr.entries()) {
  console.log(elem); // [0, 'one'] [1, 'two'] [2, 'three']
}

console.log(arr.entries()); // Array Iterator {}
console.log([...arr.entries()]); // [ [0, 'one'] [1, 'two'] [2, 'three'] ]

for (let elem of arr.entries()) {
  console.log(`${elem[0] + 1}: ${elem[1]}`); // 1: one 2: two 3: three
}

for (let [index, elem] of arr.entries()) {
  console.log(`${index + 1}: ${elem}`); // 1: one 2: two 3: three
}
