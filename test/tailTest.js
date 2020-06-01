// const assertArraysEqual = require('../assertArraysEqual');

const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail(([5, 6, 7])), [6, 7]);
  });
  it("returns [12, 84, 17] for [5, 12, 84, 17]", () => {
    assert.deepEqual(tail([5, 12, 84, 17]), [12, 84, 17]); 
  });
  
});


// assertArraysEqual(tail([5, 6, 7]), [ 6, 7 ]);
// assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);