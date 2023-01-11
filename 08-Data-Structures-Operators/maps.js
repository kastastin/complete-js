'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22
  },
  fri: {
    open: 11,
    close: 23
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24
  }
};

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

// <-- Maps: Iterations -->
console.clear();

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct answer!'],
  [false, 'Wrong answer!']
]);
console.log(question);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = +prompt('Your answer: ');
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// Convert Map to Array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log(...question.values());
