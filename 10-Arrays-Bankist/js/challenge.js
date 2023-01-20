'use strict';

// <-- Coding Challenge #1 -->

const juliaAges = [3, 5, 2, 12, 7];
const kateAges = [4, 1, 15, 8, 3];

const checkDogs = function (firstArr, secondArr) {
  const ages = firstArr.slice(1, -2).concat(secondArr);
  ages.forEach(function (age, index) {
    const isAdult = age > 2 ? 'adult' : 'puppy';
    console.log(`Dog #${index + 1}: ${age} [${isAdult}]`);
  });
};
checkDogs(juliaAges, kateAges);

// <-- Coding Challenge #2 -->

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map((age) => (age <= 2 ? age * 2 : age * 4 + 16));
  const adultHumanAges = humanAges.filter((age) => age >= 18);
  const averageAdultHumanAge =
    adultHumanAges.reduce((acc, age) => acc + age, 0) / adultHumanAges.length;

  console.log(averageAdultHumanAge);
  return averageAdultHumanAge;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // 220

// <-- Coding Challenge #3 -->
console.clear();

const calcAverageHumanAgeChaining = function (dogAges) {
  const averageAdultHumanAge = dogAges
    .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, { length }) => acc + age / length, 0);

  console.log(averageAdultHumanAge);
  return averageAdultHumanAge;
};
calcAverageHumanAgeChaining([5, 2, 4, 1, 15, 8, 3]); // 44

// <-- Coding Challenge #4 -->
console.clear();

const dogs = [
  { weight: 22, currentFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, currentFood: 200, owners: ['Matilda'] },
  { weight: 13, currentFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, currentFood: 340, owners: ['Michael'] }
];

// Task 1
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28))
);

// Task 2
const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    sarahDog.currentFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

// Task 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.currentFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.currentFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// Task 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat to much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little`);

// Task 5
console.log(dogs.some((dog) => dog.recommendedFood === dog.currentFood));

// Task 6
const checkEatingOkay = (dog) =>
  dog.currentFood > dog.recommendedFood * 0.9 &&
  dog.currentFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay)); // true

// Task 7
console.log(dogs.filter(checkEatingOkay));

// Task 8
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
