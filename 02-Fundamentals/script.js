'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // miss 's' without strict mode -> no error
if (hasDriversLicense) console.log('I can drive');

// const interface = 'test'; // strict mode -> SyntaxError (reserved word)