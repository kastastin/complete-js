// Exporting module
console.log('Exporting module');

const shoppingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;
const mainColor = 'red';

export { totalPrice, totalQuantity, mainColor as color };

// export default function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// }
