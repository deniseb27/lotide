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

const letterPositions = function(sentence) {
  const results = {};

for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  if (letter === ' ') {
    continue;
  }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
}

const results = letterPositions("hello");
console.log(letterPositions("hello"));