'use strict';

/* 
    Encapsulation uses to prevent code from outside of a class
    to accidentally manipulate data inside the class
*/

class Account {
  // Public Fields (instances)
  locale = navigator.language;

  // Private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // Protected Property

    console.log(`${this.owner}, your account is opened!`);
  }

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value, pin) {
    if (this.#approveLoan(pin)) {
      this.deposit(value);
      console.log('Loan approved');
    } else {
      console.log('Error');
    }
    return this;
  }

  // Private methods
  #approveLoan(pin) {
    return pin ? true : false;
  }
}

const acc1 = new Account('Tom', 'EUR', 1111);

// acc1.movements.push(200);
// acc1.movements.push(-100);
acc1.deposit(200);
acc1.withdraw(100);

acc1.requestLoan(1000, 1111);
// acc1.#approveLoan(1000); // SyntaxError

console.log(acc1);
console.log(acc1.getMovements()); // [200, -100, 1000]
// console.log(acc1.#movements); // SyntaxError
// console.log(acc1.#pin); //SyntaxError: Private field '#pin' must be declared in an enclosing class

// <-- Chaining Methods -->
console.clear();

acc1.deposit(300).deposit(500).withdraw(100).requestLoan(250, 1111);
console.log(acc1.getMovements()); // [200, -100, 1000, 300, 500, -100, 250]
