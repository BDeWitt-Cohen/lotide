//FUNCTION IMPLEMENTATION

let passed = "💰💰💰 Assertion Passed: [actual] === [expected]";
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected]";

const tail = function(array) {
  return array.slice(0, 1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);