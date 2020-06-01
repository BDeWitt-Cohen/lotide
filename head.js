//FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

let passed = "💰💰💰 Assertion Passed: [actual] === [expected]";
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected]";

const head = function(array) {
  return array[0];
};

module.exports = head;
