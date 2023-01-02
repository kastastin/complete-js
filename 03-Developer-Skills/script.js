'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const tempsWithoutErrors = [];

const isNumber = (value) =>
  Object.prototype.toString.call(value) === '[object Number]';

for (let temp of temperatures) {
  if (isNumber(temp)) {
    tempsWithoutErrors.push(temp);
  }
}

const calcTempAmplitude = function (...temps) {
  for (let arr of temps) {
    if (!Array.isArray(arr)) {
      return 'Every argument has to be an array';
    }
  }

  const completeArray = Array.prototype.concat(...temps);
  const sorted = completeArray.sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
};

// const tempAmplitude = calcTempAmplitude(tempsWithoutErrors);
const tempAmplitude = calcTempAmplitude([1, 2], [3, 4]);
console.log(`Amplitude: ${tempAmplitude}`);

// Dubugging
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: +prompt('Degrees celsius:')
  };

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  console.table(measurement);

  debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
