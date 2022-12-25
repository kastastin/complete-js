const country = 'Ukraine';
const continent = 'Europe';
let population = 40;

console.log(country, continent, population);


let isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);


language = 'Ukrainian';


let halfPopulation = population / 2;
population++;
console.log(population);

const populationFinland = 6;
isFinlandPopulationMore = populationFinland > population;
console.log(isFinlandPopulationMore);

let description = `${country} is in ${continent}, and its ${halfPopulation} million people speak ${language}`;
console.log(description);


// Type Conversion & Coercion
console.log('9' - '8'); // 1 (number)
console.log('19' - '13' + '17'); // 617 (string)
console.log('19' - '13' + 17); // 23 (number)
console.log('123' < 57); // false (boolean)
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 (number)


// Equality Operators: loose/strict: == vs ===
const numNeighbours = +prompt('How many neighbour countries does your country have?');
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours >= 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}