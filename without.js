let passed = "💰💰💰 Arrays are in fact the same: [actual] === [expected]";
let failed = "🤤🤤🤤 Arrays are not the same for this one: [actual] !== [expected]";

const eqArrays = function(arr1, arr2) {


  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }


};


// /*const without = function(arr1, arr2) {
//   for (var i = 0; i < arr2.length; i++) {
//     var arrlen = arr1.length;
//     for (var j = 0; j < arrlen; j++) {
//       if (arr2[i] === arr1[j]) {
//         arr1 = arr1.slice(0, j).concat(arr1.slice(j + 1, arrlen));
//       }
//     }
//   } return arr1;
// }*/

const exists = function(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true
    }

  }
  return false
}

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (var i = 0; i < source.length; i++) {
    if (!exists(source[i], itemsToRemove)) {
      newArr.push(source[i])
    }
  }
  return newArr
}


console.log(without([1, 2, 3], [2]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([7, 9, 10], [11, 12, 13, 7, 10]));
