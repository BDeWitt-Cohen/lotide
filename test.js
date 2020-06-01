const round = function(number) {
  return Math.round(number * 100) / 100;
};

function standardDeviation(values){
  let avg = average(values);
  
  let squareDiffs = values.map(function(value){
    let diff = value - avg;
    let sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  let avgSquareDiff = average(squareDiffs);

  let stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data){
  let sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  let avg = sum / data.length;
  console.log(avg.toFixed(2));
  return round(avg.toFixed(2));
}


//console.log(standardDeviation([5, 5, 0, 0, 0]))
console.log(standardDeviation([2, 2, 5]));
;