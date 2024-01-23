'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// variable x is a primitive date type number when function f1 inside val it will not affect  the original value of x
// variable y is object  when passes to f2 function  so it will affect the original value of x
