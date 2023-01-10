'use strict';

const restaurantMap = new Map();
restaurantMap.set('name', 'Classico Italiano');
restaurantMap.set(1, 'Firenze, Italy');
restaurantMap.set(2, 'Lisbon, Portugal');

// map.set returns updated map
restaurantMap
  .set('categories', ['Italian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')
  .set('info', 'no');

console.log(restaurantMap.get('name')); // Classico Italiano
console.log(restaurantMap.get(true)); // We are open
console.log(restaurantMap.get('something')); // undefined

const rest = restaurantMap;
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // true
console.log(rest.size); // 9
rest.delete('info');
// rest.clear();

rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // undefined -> arrays are not the same object in the heap
const testArr = [1, 1];
rest.set(testArr, 'Test');
console.log(rest.get(testArr)); // Test

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
