//FUNCTION IMPLEMENTATION

let passed = "💰💰💰 Assertion Passed: [actual] === [expected]"
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected] "

const head = function (array) {
  return array[0];
}

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
