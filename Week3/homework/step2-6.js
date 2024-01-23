'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const flattenedArray2 = arr.reduce((acc, current) => acc.concat(current), []);
  return flattenedArray2;
}
// Call the function with arr2d and store the result
const flattenedArray2dResult = flattenArray2d(arr2d);
// Log the result
console.log(flattenedArray2dResult);

function flattenArray3d(arr) {
  return arr.flat(Infinity);
}

// Call the function with arr3d and store the result
const flattenedArray3 = flattenArray3d(arr3d);

// Log the result
console.log(flattenedArray3); // -> [1, 2, 3, 4, 5, 6, 7
// Log the result

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
