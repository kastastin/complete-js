'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(airline.length); // 16

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(airline.indexOf('Air Portugal'))); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-3)); // gal
console.log(airline.slice(-1)); // l

const checkMiddleSeat = function (seat) {
  // B and e are middle seats
  const s = seat.slice(-1);
  console.log(
    `You got ${s === 'B' || s === 'E' ? 'the middle seat' : 'lucky'}`
  );
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');

console.log(new String('Tom')); // boxing -> string becomes object and has methods
console.log(typeof new String('Tom').split(-1)); // string method always returns primitive string
