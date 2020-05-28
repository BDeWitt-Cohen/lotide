let passed = "💰💰💰 Assertion Passed: [actual] === [expected]";
let failed = "🤤🤤🤤 Assertion Failed: [actual] !== [expected]";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}`);
  } else {
    console.log(`${failed}`);
  }
};


const findKeyByValue = function(tvShows, actualShow) {
  //look through the genre
  //see if the value in genre matches show
  //output the genre
  let genres = Object.keys(tvShows);
  console.log(genres);
  for (let genre of genres) {
    if (tvShows[genre] === actualShow) {
      return genre;
    }

  }
};


const bestTVgenresByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
findKeyByValue(bestTVgenresByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVgenresByGenre, "The Wire"), "drama");