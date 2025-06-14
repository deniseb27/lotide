const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function tail(array) {
  return array.slice(1);
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length)
console.log(tail(["Hello", "Lighthouse", "Labs"])); // Expected output: Labs