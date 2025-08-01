const without = function(source, itemsToRemove) {
  // return a new array with elements from 'source' that are not in 'itemsToRemove'
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let item = source[i];
    // only add the item if it's not in itemsToRemove
    if (!itemsToRemove.includes(item)) {
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

// log assertion result comparing actual vs expected arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);