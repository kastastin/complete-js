'use strict';

let passangerCount = 0;

const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passangers`);
  };
};

const booker = secureBooking();

booker(); // 1 passangers
booker(); // 2 passangers
booker(); // 3 passangers
console.dir(booker);

console.log(`Global 'passangerCount': ${passangerCount}`); // 0

/*
booker function has access to the passangerCount
BECAUSE it's basically defined in the scope in which booker function was actually created.
The scope chain is actually preserved through the closure
Even when a scope has already been destroyed.

Thanks to the closure a function does not lose connection to variables 
that existed at the function's birthplace.

Closure has priority over the scope chain
*/

/*
  The most formall definition of closure
A closure is the closed-over variable environment of the execution contex
in which a function was created, even after that execution context is gone.

  Less formal definition
A closure gives a function access to all the variables of its parent function,
even after that parent function has returned.
The function keeps a reference to its outer scope,
which preserves the scope chain throughout time.

  Less formal definition
A closure makes sure that function doesn not loose connection to variable
that existed at the function's birth place.

  Less formal definition
A closure is like a backpack that a function carries arround wherever it goes.
This backpack has all the variables that were present in the environment 
where the function was created.
*/

// <-- Another Explanation -->
console.clear();

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside'); // Outer Variable: outside Inner Variable: inside

/*

1. The outerFunction('outside') is called immediately
   when it is assigned to the variable 'newFunction'

2. Upon being called, outerFunction returns the function 'innerFunction(innerVariable)'
   which re-assignes our variable 'newFunction' to be 'innerFunction(innerVariable)'
   instead of 'outerFunction(outerVariable)'

3. Then by calling our variable as 'newFunction('inside') we are calling 'innerFunction('inside')'
   which runs the console.log code. The closure is that 'innerFunction' remembers
   and has access to the outerVariable parameter we originally set with 'outerFunction('outside')'.
   Thus it is able to console.log both 'outside' and 'inside' even though it was called
   with just 'inside'.
*/
