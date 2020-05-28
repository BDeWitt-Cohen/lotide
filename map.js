let passed = "💰💰💰 Assertion Passed: [actual] === [expected]";
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected]";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};

const eqArrays = function(arr1, arr2) {

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {

    return true;
  } else {
    return false;
  }


};

const words = ["hello", "can", "you", "hear", "me"];
const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }


  return results;
};

const firstLetter = function(word) {
  return word[0];
};

assertEqual(eqArrays(map(words, firstLetter), ['h', 'c', 'y', 'h', 'm']), true);



