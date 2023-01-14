'use strict';

// <-- Immediately Invoked Function Expressions (IIFE) -->

// using (fn...) we tranformed the statement into an expression
(function () {
  console.log('This will never run again');
})();

// arrow function
(() => console.log('This will ALSO never run again'))();

(function () {
  console.log('IIFE');
  const isPrivate = true; // this data is encapsulated
})();
// console.log(isPrivate); // ReferenceError: isPrivate is not defined

// Variables declared with 'let' or 'const' create their own scope inside a block

{
  const isPrivate = true;
  var isNotPrivate = true;
}
// console.log(isPrivate); // ReferenceError: isPrivate is not defined
console.log(isNotPrivate); // true

/*
In Modern JS IIFEs are not used anymore
BECAUSE OF if we want to create a new scope for data privacy
We just need to create a block like ⬆️⬆️⬆️

There's no need to creating a function to create a new scope
*/
