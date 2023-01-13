' use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    const flight = `${this.iataCode}${flightNum}`;
    this.bookings.push({ name, flight: `${flight}` });
    console.log(`${name} booked a seat on ${this.airline} flight ${flight}`);
  }
};

lufthansa.book(239, 'Bob Builder');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // TypeError -> function book has this keyword - 'undefined'

// <-- Call Method -->

book.call(eurowings, 23, 'Sarah Williams'); // call book function with this - 'eurowings'
book.call(lufthansa, 214, 'Mary Cooper'); // call book function with this - 'lufthansa'

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

book.call(swiss, 582, 'Tom Monrey');

// <-- Apply Method -->

const flightData = [341, 'George Swins'];

// Method apply takes an array of the arguments
book.apply(swiss, flightData);

// Apply Method is not used anymore in modern JS -> because of spread operator (...)
book.call(swiss, ...flightData);

console.log(lufthansa, eurowings, swiss);

// <-- Bind Method -->
console.clear();

// Method bind does not immediately call the function
// Bind returns a new function where 'this' keyword is bound

const bookEW = book.bind(eurowings); // bookEW = function with 'this' = eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(149, 'Steven Lewis');

const bookEW23 = book.bind(eurowings, 23); // set in stone 'this' and first argument
bookEW23('Alexa Porter');
bookEW23('Oscar Watts');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(`Planes: ${this.planes}`);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 20

const addVAT = addTax.bind(null, 0.23); // always 23%, 'this' is not need -> null
console.log(addVAT(100)); // 123

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
