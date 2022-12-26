'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descrFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(descrFinland);


// Function Declarations vs Expressions
function percentageOfWorld1(population) {
  console.log(((population * 100) / 7900).toFixed(2));
}
percentageOfWorld1(1441);

const percentageOfWorld2 = function(population) {
  return ((population * 100) / 7900).toFixed(2);
};
console.log(percentageOfWorld2(1441));