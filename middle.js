let middle = function(array) {
  // take in an array and return the middle most element of the array
  if (array.length < 3) {
    return [];
    // if array contains only 2 or fewer elements, return empty array
  } else if (array.length % 2 === 0) {
    // if array length is even, return middle two elements
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else {
    // if array length is odd, return middle element
    return [array[Math.floor(array.length / 2)]];
  }
};

// export function for use in other modules
module.exports = middle;
