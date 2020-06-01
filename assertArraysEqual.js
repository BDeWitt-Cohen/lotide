const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {


  let passed = `💰💰💰 Assertion Passed: ${actual} === ${expected}`;
  let failed = `🤤🤤🤤 Assertion Failed: ${actual} !== ${actual}`;
  

  if (eqArrays(actual, expected)) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }


};




module.exports = assertArraysEqual;