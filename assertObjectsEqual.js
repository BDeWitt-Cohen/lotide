
const assertObjectsEqual = function(object1, object2) {

  const inspect = require('util').inspect;

  if (Object.keys(object1).length !== Object.keys(object2).length) { //compare the object lengths
    console.log(`🤤🤤🤤 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return false;
  }
  //compare the object values, but how?
  for (const key in object1) { //you don't need to loop through both objects!
    const valueInObj1 = object1[key]; //*** how to get a value when you have the key, this will give you the value
    const valueInObj2 = object2[key];
    if (valueInObj1 !== valueInObj2) {
      if (Array.isArray(valueInObj1) && Array.isArray(valueInObj2)) {
        //compare the length of the array values inside the keys, if the length aren't equal return false
        if (valueInObj1.length !== valueInObj2.length) {
          console.log(`🤤🤤🤤 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
          return false;
        }
        for (const valueInArray1 of valueInObj1) { //if it's made it this far valueInArray1 must be an array
          if (!valueInObj2.includes(valueInArray1)) {
            console.log(`🤤🤤🤤 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
            return false; //.include is powerful and using an easy exit is better
          }
        }
        console.log(`💰💰💰 Assertion Passed: ${inspect(object1)} !== ${inspect(object2)}`);
        return true;
        //if length of the arrays are equal look at the values inside the arrays to see if they're equal


      }
      console.log(`🤤🤤🤤 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      return false;
    }
  }
  console.log(`💰💰💰 Assertion Passed: ${inspect(object1)} !== ${inspect(object2)}`);
  return true;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

