//FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected){
if(actual === expected){
  console.log("💰💰💰 Assertion Passed: [actual] === [expected]");
} else {
  console.log("🤤🤤🤤 Assertion Failed: [actual] !== [expected] ");
}
}

//Test Code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(7, "7");
assertEqual(55, 55);
assertEqual("42", "42");
assertEqual("Hi", "Hi");