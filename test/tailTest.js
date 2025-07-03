const tail = require("../tail");
const assertEqual = require("../assertEqual");

//test cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ✅ Should pass
assertEqual(result[0], "Lighthouse"); // ✅ Should pass
assertEqual(result[1], "Labs");       // ✅ Should pass

//
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length)
console.log(tail(["Hello", "Lighthouse", "Labs"]))