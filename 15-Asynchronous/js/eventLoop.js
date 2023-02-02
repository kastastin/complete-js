'use strict';

console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Value of Resolved Promise 1').then((response) =>
  console.log(response)
);
Promise.resolve('Value of Resolved Promise 2').then((response) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(response);
});

console.log('Test End');

// Test Start
// Test End
// Value of Resolved Promise 1 (because of micro-tasks queue)
// Value of Resolved Promise 2 (because of micro-tasks queue)
// 0 sec timer (because of callback queue)

// micro-tasks queue has priority over the callback queue
