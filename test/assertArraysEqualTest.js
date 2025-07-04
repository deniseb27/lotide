const assertArraysEqual = require("../assertArraysEqual");


// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);  // Pass
assertArraysEqual([1, 2, 3], [3, 2, 1]);  // Fail