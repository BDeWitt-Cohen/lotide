const letterPositions = function(sentence) {

  sentence = sentence.replace(/ /g, '');
  const results = {};
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);

    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};


console.log(letterPositions("ola como estas"));
