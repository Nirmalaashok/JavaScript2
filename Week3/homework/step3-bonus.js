'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  console.log(arr);
  const outputArray = arr.filter(function(v, i, self) {
    return i === self.indexOf(v);
  });
  return outputArray; // Return the modified array with duplicates removed
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
