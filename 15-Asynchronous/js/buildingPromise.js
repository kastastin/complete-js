'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win 🎁');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 4000);
});

lotteryPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(3);
  })
  .then(() => console.log('I waited for 5 seconds'));

// setTimeout(function () {
//   console.log('1 second passed');
//   setTimeout(function () {
//     console.log('2 seconds passed');
//     setTimeout(function () {
//       console.log('3 seconds passed');
//       setTimeout(function () {
//         console.log('4 seconds passed');
//         setTimeout(function () {
//           console.log('5 seconds passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

wait(7)
  .then(() => {
    console.log('7 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('8 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('9 second passed');
    return wait(1);
  })
  .then(() => console.log('10 second passed'));

Promise.resolve('PromiseResolve').then((res) => console.log(res)); // PromiseResolve
Promise.reject('PromiseReject').catch((res) => console.error(res)); // PromiseReject
Promise.reject(new Error('PromiseReject')).catch((res) => console.error(res));
