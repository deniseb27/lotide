const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
      }
  return true;
}

const result1 = findKey({
   "Blue Hill": { stars: 1},
    Akaleri: { stars: 3},
    noma: { stars: 2},
    elBulli: { stars: 3},
    Ora: { stars: 2},
    Akelarre: { stars: 3},
  },
  (x) => x.stars === 2
);

assertEqual(result1, "noma");