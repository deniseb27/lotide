// returns a slice of the array until the callback returns a truthy value
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
};

// compares two arrays for strict equality
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// logs assertion result comparing actual vs expected arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// sample data and test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [8, 16, 30, 7, 17, 7, 22];

// take values until a negative number occurs
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// take values until a value greater than 10 is encountered
assertArraysEqual(takeUntil(data2, x => x > 10), [8]);