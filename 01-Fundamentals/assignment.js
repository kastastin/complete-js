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