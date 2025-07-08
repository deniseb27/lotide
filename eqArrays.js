const eqArrays = function(array1, array2) {
  // write a function that takes in two arrays and returns true if the arrays are equal and false otherwise
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};
// export function for use in other modules
module.exports = eqArrays;
