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


const takeUntil = function(array, callback) {
  //return a slice of an array until the call back returns true which will be a value in the array
  //use a for each
  //looks like it will need to end as an array but might not need to do that if using slice method

  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    if (callback(elem)) {

      return array.slice(0, i);
    }
  }

  return [];
};


const newCall = function(numInArr) {

  return numInArr % 2 !== 0;

};

const data = [88, 98, 74, 72, 13, 94, 54, 56];
console.log(takeUntil(data, newCall));


assertEqual(eqArrays(takeUntil(data, newCall), [89, 98, 74, 72]), true);
