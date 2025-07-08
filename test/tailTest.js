const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for an array with one item", () => {
    assert.deepEqual(tail(['only']), []);
  });
  it("returns [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});

// Test that tail returns the expected array without the first element
// assertEqual(result.length, 2); // Expected length is 2, since tail removes the first element

// // Test that tail returns the correct elements
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// // Additional test cases for tail function
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");