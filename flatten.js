const flatten = function(array) {
  // flatten a single-level nested array into a one-dimensional array
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    // if item is an array, loop through and push each element
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        result.push(item[j]);
      }
    } else {
      // otherwise just push the element
      result.push(item);
    }
  }

  return result;
};

// compare two arrays for strict equality
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// log result comparing actual vs expected arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);