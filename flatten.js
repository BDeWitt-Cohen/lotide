// const flatten = function(arr){
// //take arr and make a nested array a single array
// //
// }

// var newArr = [1, 2, [3, 4], 5, [6]];

// var done = newArr.flat([])

// console.log(done);

// const arr = [1, 2, [3, 4]];
// const flattened = arr => [].concat(...arr);
// // To flat single level array
// // arr.flat();

// // return arr
// return flattened
// console.log(flattened)





const flatten = function(arr) {
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      console.log(arr[i]);
      finalArr += finalArr.push(arr[i]);

    } else {
      finalArr += arr;
    }

    return new Array(finalArr);

  }
};

console.log(flatten([1, 2, [3, 7], [5], [6]]));