const eqArrays = require("../eqArrays");
console.log("eqArray is:", eqArrays);
const assertEqual = require("../assertEqual");

//test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);         // ✅ should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);        // ✅ should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  // ✅ should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);   // ✅ should PASS