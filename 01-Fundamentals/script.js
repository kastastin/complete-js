const mark = {
  firstName: 'Mark',
  height: 1.69,
  weight: 78,
  isBMIHigher: false
};

const john = {
  firstName: 'John',
  height: 1.95,
  weight: 92,
  isBMIHigher: false
};

function getBMI(weight, height) {
  return (weight / height ** 2).toFixed(1);
}

mark.BMI = getBMI(mark.weight, mark.height);
john.BMI = getBMI(john.weight, john.height);

let markHigherBMI;
if (mark.BMI > john.BMI) {
  mark.isBMIHigher = true;
  markHigherBMI = true;
} else {
  john.isBMIHigher = true;
}

let result = '';
if (mark.isBMIHigher) {
  result += `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s BMI (${john.BMI})!`;
} else {
  result += `${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s BMI (${mark.BMI})!`;
}

console.log(result);
