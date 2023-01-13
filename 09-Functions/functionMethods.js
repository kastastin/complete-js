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
