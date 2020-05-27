// const eqArrays = function(arr1, arr2) {


//   if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
//     return true;
//   } else {
//     return false;
//   }
// };

let passed = "💰💰💰 Arrays are in fact the same: [actual] === [expected]";
let failed = "🤤🤤🤤 Arrays are not the same for this one: [actual] !== [expected]";

const assertArraysEqual = function(arr1, arr2) {


  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }


};

const middle = function(array) {

  let newArr = [];

  if (array.length === 1 || array.length === 2) {
    newArr = [];
  } else if (array.length % 2 !== 0) {
    const oddArr = Math.floor(array.length / 2);
    newArr.push(array[oddArr]);

  } else {
    const middleArr = array.length / 2;
    const middArrMinusOne = middleArr - 1;
    newArr.push(array[middArrMinusOne], array[middleArr]);

  }
  return newArr;
};

assertArraysEqual((middle([5, 12, 84])), [12]);
console.log(middle([12, 84])); // => [2]

