'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0) {
      threeCallback(i);
    }
    if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  console.log(`Start Index: ${startIndex}, Stop Index: ${stopIndex}`);
  console.log('Numbers:', numbers);
  return numbers;
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(`${number} is divisible by 3`);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(`${number} is divisible by 3`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
