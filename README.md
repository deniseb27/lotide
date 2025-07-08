# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @deniseb27/lotide`

**Require it:**

`const _ = require('@deniseb27/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns the first element of an array.
- `tail(array)`: Returns a new array containing all elements except the first.
- `middle(array)`: Returns the middle element(s) of an array.
- `assertArraysEqual(arr1, arr2)`: Logs assertion results comparing two arrays.
- `assertEqual(actual, expected)`: Logs assertion results comparing two values.
- `assertObjectsEqual(obj1, obj2)`: Logs assertion results comparing two objects.
- `countLetters(string)`: Returns an object counting the occurrences of each letter.
- `countOnly(allItems, itemsToCount)`: Counts only specified items from an array.
- `eqArrays(arr1, arr2)`: Returns true if two arrays are equal.
- `eqObjects(obj1, obj2)`: Returns true if two objects are equal.
- `findKey(object, callback)`: Returns the first key for which the callback returns true.
- `findKeyByValue(object, value)`: Returns the first key which contains the given value.
- `letterPositions(string)`: Returns an object showing all indices for each letter.
- `takeUntil(array, callback)`: Returns a slice of the array until callback returns true.
- `without(sourceArray, itemsToRemove)`: Returns a new array without the specified items.