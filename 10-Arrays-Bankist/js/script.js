'use strict';

// <-- Data -->
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

// <-- Elements -->
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">2 deposit</div>
        <div class="movements__date">${index + 1} ${type}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((movement) => movement > 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((movement) => movement < 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((movement) => movement > 0)
    .map((movement) => (movement * acc.interestRate) / 100)
    .filter((movement) => movement >= 1)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username =
      account.owner
        .toUpperCase()
        .trim()
        .split(' ')
        .map((word) => word[0])
        .join('.') + '.';
  });
};
createUsernames(accounts);

const updateUI = function (account) {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

const clearInputFields = function (firstInput, secondInput) {
  secondInput ||= firstInput;
  firstInput.value = secondInput.value = '';
  secondInput.blur();
};

// <-- Event Handlers -->
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.innerHTML = `
      Welcome back, <span>${currentAccount.owner.split(' ')[0]}</span>
    `;
    containerApp.style.opacity = 1;
    clearInputFields(inputLoginUsername, inputLoginPin);
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  clearInputFields(inputTransferTo, inputTransferAmount);

  const amount = +inputTransferAmount.value;
  const receiverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = +inputLoanAmount.value;
  if (
    amount > 0 &&
    currentAccount.movements.some((movement) => movement >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  clearInputFields(inputLoanAmount);
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
});

let sortedState = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  sortedState = !sortedState;
  displayMovements(currentAccount.movements, sortedState);
});
