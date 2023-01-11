'use strict';

console.log('Bob Builder'.split(' ')); // ['Bob', 'Builder']
const [firstName, lastName] = 'Bob Builder'.split(' ');
console.log(firstName, lastName); // Bob Builder
console.log(['Mr.', firstName, lastName].join(' ')); // Mr. Bob Builder

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(', '));
};
capitalizeName('jessica ann smith davis'); // Jessica, Ann, Smith, Davis

// Padding
console.log('test'.padStart(5, '-').padEnd(6, '-')); // -test-
console.log('test'.padStart(10, '-')); // ------test

const maskCreditCard = function (number) {
  const str = number + ''; // String(number)
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(127592740483)); // ********0483

// Repeat
const msg = 'abc';
console.log(msg.repeat(2)); // abcabc
