const assertEqual = function(actual, expected) {
  // compare two arrays and determine if they are equal
  if (actual === expected) {
    // if arrays are equal, log a success message
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // if arrays aren't equal, log a failed message
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// export the function so it can be used in other modules
module.exports = assertEqual;
