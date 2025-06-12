const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5); // Expected output: ✅✅✅ Assertion Passed: 5 === 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Expected output: ✅✅✅ Assertion Passed: Hello === Hello
assertEqual(head([1, 2, 3]), 1); // Expected output: ✅✅✅ Assertion Passed: 1 === 1
assertEqual(head([]), undefined); // Expected output: 🛑🛑🛑 Assertion Failed: undefined !== undefined