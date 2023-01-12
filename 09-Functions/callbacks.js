'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
console.log(oneWord('1 b c')); // abc

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};
console.log(upperFirstWord('test'));

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Originam string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}()`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);

// Example
[1, 2, 3].forEach((item) => console.log(item)); // 1 2 3
