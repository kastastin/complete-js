'use strict';

function calcAge(birthYear) {
  // console.log(firstName);
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear <= 2005) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Another Name';

      // Reassigning outer scope's variable
      output = 'New output';

      const str = `Oh, and you are adult, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(add(1, 1)); // ReferenceError -> scope <add> function in defined if block
    // console.log(str); // ReferenceError -> the same (only in strict mode)
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Tom';
calcAge(2005);
