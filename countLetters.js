// count the number of times each letter appears in a sentence (ignorming spaces)
const countLetters = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    // ignore spaces
    if (letter === ' ') {
      continue; // skip spaces
    }
    // increment count if letter exists, else initialize to 1
 if (results[letter]) {
  results[letter] += 1;
 } else {
  results[letter] = 1;
 }
  }
return results;

}

// export function for use in additional modules
module.exports = countLetters;
