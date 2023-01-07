'use strict';

// <-- Primitive types -->
let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge); // 31 30

// <-- Refrence types -->
const tom = {
  firstName: 'Tom',
  age: 30
};
const me = tom;
me.firstName = 'Bob';
console.log(tom, me); // Bob Bob
// object is reference value & store in HEAP
// stack keeps a reference to memory position in HEAP

// <-- Copying objects -->
const obj = {
  unit: 5,
  isCopied: false,
  nums: [0, 1, 2]
};
const copyObj = Object.assign({}, obj); // works only on the first level (not for nested objects)
copyObj.isCopied = true;
copyObj.nums[0] = 5;
console.log(obj, copyObj);

// One way to make a deep copy obj is to use JSON.stringify() & JSON.parse()
const deepCopyObj = JSON.parse(JSON.stringify(copyObj));
deepCopyObj.nums[0] = 100;
console.log(obj, copyObj, deepCopyObj);
