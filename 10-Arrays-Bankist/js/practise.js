'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// <-- Task 1 -->

const bankDepositSum = accounts
  .flatMap((account) => account.movements)
  .filter((movement) => movement > 0)
  .reduce((sum, deposit) => sum + deposit, 0);
console.log(bankDepositSum); // 25180

// <-- Task 2 -->

// const numDeposits1000 = accounts
//   .flatMap((account) => account.movements)
//   .filter((movement) => movement >= 1000).length;
// console.log(numDeposits1000); // 6

const numDeposits1000 = accounts
  .flatMap((account) => account.movements)
  .reduce((count, movement) => (movement >= 1000 ? ++count : count), 0);
console.log(numDeposits1000); // 6

// <-- Task 3 -->

const { deposits, withdrawals } = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (sums, movement) => {
      sums[movement > 0 ? 'deposits' : 'withdrawals'] += movement;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); // 25180 -7340

// <-- Task 4 -->

const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('and this is a nice title but not too long'));
