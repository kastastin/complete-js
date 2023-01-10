'use strict';

// Set is a collection of UNIQUE values
console.log(new Set('Jonas')); // {'J', 'o', 'n', 'a', 's'}

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);
console.log(ordersSet, ordersSet.size); // {'Pasta', 'Pizza', 'Risotto'} 3
console.log(ordersSet.has('Pizza')); // true

ordersSet.add('Garlic');
ordersSet.delete('Risoto');
// ordersSet.clear();
for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set('example').size); // 6
