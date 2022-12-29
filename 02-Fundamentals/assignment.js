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


// Basic Array Operations (Methods)
const neighbours = ['nb1', 'nb2', 'Sweden'];
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country');
}
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);


// Introduction to Objects
const myCountry = {
  country: 'Ukraine',
  capital: 'Kiev',
  language: 'Ukrainian',
  population: 44,
  neighbours: ['nb1', 'nb2'],
  // describe: function() {
  //   const description = `${this.country} has ${this.population} million people`;
  //   return description;
  // }
  // checkIsland: function() {
  //   this.isIsland = !this.neighbours ? true : false;
  // }
};

myCountry.population *= 2;
myCountry['population'] /= 2;
const myCountryInfo = `${myCountry.country} has ${myCountry.population} million people`;
console.log(myCountryInfo);


// Object Methods
myCountry.describe = function() {
  const description = `${this.country} has ${this.population} million people`;
  return description;
}
console.log(myCountry.describe());

myCountry.checkIsland = function() {
  this.isIsland = !this.neighbours.length ? true : false;
}
myCountry.checkIsland();
console.log(myCountry.isIsland);


// Iteration: The for Loop
for (let num = 1; num <= 3; num++) {
  console.log(`Voter number ${num} is currently voting`);
}


// Looping Arrays, Breaking & Continuing
// console.log(populations); // [ 44, 17, 9, 140 ]
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld3(populations[i]));
}
console.log(percentages2);


// Looping Backwards & Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'USA']];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}


// The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld3(populations[i]));
  i++;
}
console.log(percentages3);