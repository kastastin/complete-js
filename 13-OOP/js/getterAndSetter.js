'use strict';

const account = {
  owner: 'Tom',
  movements: [10, 40, -5],

  get latest() {
    return this.movements.at(-1);
  },

  set latest(movement) {
    this.movements.splice(-1, 1, movement);
  }
};

// Getter
console.log(account.latest); // -5

// Setter
account.latest = 50;
console.log(account.movements); // [10, 40, 50]
