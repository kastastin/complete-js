'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`${this.owner}, your account is opened!`);
  }

  // Public Interface
  deposit(value) {
    this.movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Tom', 'EUR', 1111);

// acc1.movements.push(200);
// acc1.movements.push(-100);
acc1.deposit(200);
acc1.withdraw(100);

acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
