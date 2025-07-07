const countLetters = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === ' ') {
      continue; // skip spaces
    }
 if (results[letter]) {
  results[letter] += 1;
 } else {
  results[letter] = 1;
 }
  }
return results;

}


module.exports = countLetters;
