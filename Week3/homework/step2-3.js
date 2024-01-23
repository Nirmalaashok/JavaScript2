'use strict';

// Use a 'for'
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  // Replace this comment and the next line with your code
  console.log(str, num, result);

  return result;
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let result = '';
  let i = 0;
  // Use a 'while' loop to concatenate the string 'num' times
  while (i < num) {
    result += str;
    i++;
  }
  // Replace this comment and the next line with your code
  console.log(str, num, result);

  return result;
}
console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = '';

  // Check if num is greater than 0 before starting the do-while loop
  if (num > 0) {
    let i = 0;
    do {
      result += str;
      i++;
    } while (i < num);
  }

  // Log the information about the repetition to the console
  console.log(str, num, result);

  return result;
}
console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
