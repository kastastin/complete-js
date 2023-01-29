'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin; // Protected Property
    this._movements = []; // Protected Property
    this.locale = navigator.language;

    console.log(`${this.owner}, your account is opened!`);
  }

  // Public Interface
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
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
acc1._approveLoan(1000);

console.log(acc1);

// Encapsulation uses to prevent code from outside of a class to accidentally
// manipulate data inside the class

console.log(acc1.getMovements()); // [200, -100, 1000]
