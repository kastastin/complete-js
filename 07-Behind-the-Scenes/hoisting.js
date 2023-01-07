'use strict';

// <-- Variables -->

// console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization // TDZ
// console.log(year); // ReferenceError: Cannot access 'year' before initialization // TDZ
// TDZ -> Temporary Dead Zone
// TDZ starts from the beginning of the current scope until the point of code where it is defined

var me = 'Tom';
let job = 'teacher';
const year = 2000;

// <-- Functions -->

// console.log(addDeclaration(1, 1)); // 2
// console.log(addExpression(1, 1)); // ReferenceError: Can't access 'addExpression' before init(TDZ)
// console.log(addArrow(1, 1)); // ReferenceError: Cannot access 'addArrow' before init
// console.log(addArrowVar(1, 1)); // TypeError: addArrowVar is not a function
// Variable declared with var is undefined. We try call undefined: undefined(1, 1)

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
var addArrowVar = (a, b) => a + b;

// <-- Example -->

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
