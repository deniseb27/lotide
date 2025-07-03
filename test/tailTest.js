const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);

// Test that tail returns the expected array without the first element
assertEqual(result.length, 2); // Expected length is 2, since tail removes the first element

// Test that tail returns the correct elements
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Additional test cases for tail function
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");