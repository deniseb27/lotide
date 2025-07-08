const eqArrays = require("./eqArrays");

// compare two arrays and log appropriate message
// uses eqArrays as helper function

const assertArraysEqual = function(actual, expected) {
  // if arrays are equal, log a success message
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
// export the function so it can be used in other modules
module.exports = assertArraysEqual;