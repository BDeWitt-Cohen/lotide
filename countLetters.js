let passed = "💰💰💰 Assertion Passed: [actual] === [expected]";
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected]";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};


const countLetters = function(str) {
  //Need to return an object
  //Need the keys of object to equal the letter
  //Need the value to equal the count of those letters
  //Will use a for of loop for(const letter of letters) or something
  //Input is a string
  //
  let newObj = {};
  str = str.replace(/ /g, '');

  for (let letter of str) {

    if (newObj[letter]) {

      newObj[letter] += 1;
    } else {
      newObj[letter] = 1;
    }
  }
  return newObj;
};


console.log(countLetters("this is a string"));
console.log(countLetters("lighthouse"));
assertEqual(countLetters("this is a string"), { t: 2, h: 1, i: 3, s: 3, a: 1, r: 1, n: 1, g: 1 });