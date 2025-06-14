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
// test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual("Bootcamp", "bootcamp");
assertEqual(99, 99);
assertEqual(1, 2);


// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);         // ✅ should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);        // ✅ should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  // ✅ should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);   // ✅ should PASS
assertEqual(eqArrays([], []), true);                      // ✅ should PASS
assertEqual(eqArrays([1], [1]), true);                    // ✅ should PASS
assertEqual(eqArrays([1], [1, 2]), false);                // ✅ should PASS
assertEqual(eqArrays(["hello"], ["hello"]), true);        // ✅ should PASS
assertEqual(eqArrays(["hello"], ["Hello"]), false);       // ✅ should PASS
