let passed = "💰💰💰 Arrays are in fact the same: [actual] === [expected]";
let failed = "🤤🤤🤤 Arrays are not the same for this one: [actual] !== [expected]";

const assertArraysEqual = function(arr1, arr2) {


  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }


};


assertArraysEqual([1, 2, 3], [1, 2, 4]);

module.exports = assertArraysEqual 