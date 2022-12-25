// Coding Challenge #1

/*
  BMI = mas / (height * height)
  where mas ~ kg, height ~ meter

  1. Store Mark's and John's mass and height in variables
  2. Calculate both thier BMIs using the formula
  3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John

  TEST DATA 1: Marks weights 78 kg and is 1.69 m tall,
               John weights 92 kg and is 1.95 tall
  TEST DATA 2: Marks weights 95 kg and is 1.88 m tall,
               John weights 85 kg and is 1.76 m tall
*/


class Person {
  constructor(firstName, height, weight) {
    this.firstName = firstName;
    this.height = height;
    this.weight = weight;
    this.BMI = (this.weight / this.height ** 2).toFixed(1);
    this.isBMIHigher = false;
  }

  compareBMI(anotherPerson) {
    this.isBMIHigher = this.BMI > anotherPerson.BMI ? true : false;
  }

  printInfo(anotherPerson) {
    console.log(`${this.firstName}'s BMI (${this.BMI}) is ${this.isBMIHigher ? 'higher' : 'less'} than ${anotherPerson.firstName}'s BMI (${anotherPerson.BMI})!`);
  }
}

const mark = new Person('Mark', 1.69, 78);
const john = new Person('John', 1.95, 92);
mark.compareBMI(john);
john.compareBMI(mark);

let markHigherBMI = mark.isBMIHigher;

// mark.printInfo(john);
// john.printInfo(mark);


// Coding Challenge #3
function calcAverageScore(...scores) {
  let scoreSum = 0;
  for (let score of scores) {
    scoreSum += score;
  }
  const averageScore = scoreSum / scores.length;
  return averageScore.toFixed(1);
}

const scoreDolphins = calcAverageScore(96, 108, 89);
const scoreKoalas = calcAverageScore(88, 91, 110);

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win');
} else {
  console.log('Both win');
}