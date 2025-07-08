// returns an object where each letter is a key and the value is an array of indices where it appears
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === ' ') {
      continue;
    }
    // add index to array of positions for this letter
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

// example usage
const result1 = letterPositions("hello");

// export function for use in other modules
module.exports = letterPositions;