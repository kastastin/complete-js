'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 295 * numPassengers
) {
  // numPassengers = numPassengers || 1;
  // price ||= 295;

  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 295}
createBooking('LH123', 2); // {flightNum: 'LH123', numPassengers: 2, price: 590}

createBooking('LH123', undefined, 2000); // {flightNum: 'LH123', numPassengers: 1, price: 2000}
