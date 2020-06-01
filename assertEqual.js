//FUNCTION IMPLEMENTATION



const assertEqual = function(actual, expected) {

  let passed = `💰💰💰 Assertion Passed: ${actual} === ${expected}`;
  let failed = `🤤🤤🤤 Assertion Failed: ${actual} !== ${actual}`;
  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};



//Test Code

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(7, "7");
// assertEqual(55, 55);
// assertEqual("42", "42");
// assertEqual("Hi", "Hi");

module.exports = assertEqual;