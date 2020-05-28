let passed = "💰💰💰 Assertion Passed: [actual] === [expected]";
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected]";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};


const findKey = function(movieObj, callback) {
  //return first value that is truthy
  //return undefined otherwise
  // which means the loop should be fine if it never finds that key

  for (let key in movieObj) {

    if (callback(movieObj[key])) {
      return key;

    }



  }
};
const movieKey = function(movie) {
  //this needs to return a truthy value
  return movie.quality === "just, like, super duper amazing";
};
let movieObj = {

  "Get Out": { quality: "pretty decent" },
  "Clueless": { quality: "well, the wife likes it" },
  "Half Baked": { quality: "just, like, super duper amazing" },
  "Goodfellas": { quality: "just, like, super duper amazing" }

};

console.log(findKey(movieObj, movieKey));


assertEqual(findKey(movieObj, movieKey), "Half Baked");


