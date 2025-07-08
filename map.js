// sample orray of words to use with map
const words = ["ground", "control", "to", "major", "tom"];

// write function that takes in an array and a callback and returns a new array based on the results of the callback
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    const result = callback(item);
    results.push(result);
  }
  return results;
};

// compares two arrays for strict equality
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// logs assertion result comparing actual to expected arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// test cases - get first letter of each word
const results1 = map(words, (word) => word[0]);
// test cases - get legnth of each word
const results2 = map(words, (word) => word.length);
// test cases - convert each word to uppercase
const results3 = map(words, (word) => word.toUpperCase());

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);