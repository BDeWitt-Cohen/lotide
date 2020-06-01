// const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');
const middle = require('../middle');

const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 12 for [5, 12, 84]", () => {
    assert.deepEqual(middle(([5, 12, 84])), [12]);
  });
  it("returns [12, 84] for [5, 12, 84, 17]", () => {
    assert.deepEqual(middle([5, 12, 84, 17]), [12, 84]); 
  });
  
});

// assertArraysEqual((middle([5, 12, 84, 17])), [12]);