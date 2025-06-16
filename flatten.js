const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        result.push(item[j]);
      }
    } else {
      result.push(item);
    }
  }

return result;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);