//FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
let passed = "💰💰💰 Assertion Passed: [actual] === [expected]";
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected]";

const tail = function(array) {
  return array.slice(1);
};


module.exports = tail;

