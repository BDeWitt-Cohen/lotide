//FUNCTION IMPLEMENTATION

const assertArraysEqual = function(arr1, arr2) {


  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }


};

const assertEqual = function(actual, expected) {
  let passed = "💰💰💰 Arrays are in fact the same: [actual] === [expected]";
  let failed = "🤤🤤🤤 Arrays are not the same for this one: [actual] !== [expected]";

  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};

const eqObjects = function(object1, object2) {



  if (Object.keys(object1).length !== Object.keys(object2).length) { //compare the object lengths
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
          return false;
        }
        for (const valueInArray1 of valueInObj1) { //if it's made it this far valueInArray1 must be an array
          if (!valueInObj2.includes(valueInArray1)) {
            return false; //.include is powerful and using an easy exit is better
          }
        }
        return true;
        //if length of the arrays are equal look at the values inside the arrays to see if they're equal


      }
      return false;
    }
  }
  return true;
};




// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
