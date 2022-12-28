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


// Arrow Functions
const percentageOfWorld3 = population => ((population * 100) / 7900).toFixed(2);
console.log(percentageOfWorld3(1441));


// Functions calling other functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
}
console.log(describePopulation('China', 1441));


// Introduction to Arrays
const populations = [44, 17, 9, 140];
console.log(populations.length === 4 ? true : false);
const percentages = [];
for (let elem of populations) {
  percentages.push(percentageOfWorld3(elem));
}
console.log(percentages);