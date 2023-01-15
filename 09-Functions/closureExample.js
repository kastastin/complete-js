'use strict';

let f;
const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
};
g();
f(); // 40

const h = function () {
  const b = 777;
  f = function () {
    console.log(b);
  };
};
h();
f(); // 777
console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n}`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
