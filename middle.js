const assertArraysEqual = require('../assertArraysEqual') //if needed without using the test folder

// const assertArraysEqual = function(actual, expected) {
//   let passed = `💰💰💰 Assertion Passed: ${actual} === ${expected}`;
//   let failed = `🤤🤤🤤 Assertion Failed: ${actual} !== ${actual}`;


//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log(`${passed}`);
//   } else {
//     console.log(`${failed}`);
//   }


// };

const middle = function(array) {

  let newArr = [];

  if (array.length === 1 || array.length === 2) {
    newArr = [];
  } else if (array.length % 2 !== 0) {
    const oddArr = Math.floor(array.length / 2);
    newArr.push(array[oddArr]);

  } else {
    const middleArr = array.length / 2;
    const middArrMinusOne = middleArr - 1;
    newArr.push(array[middArrMinusOne], array[middleArr]);

  }
  return newArr;
};


module.exports = middle;

