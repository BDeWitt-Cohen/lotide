const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual((middle([5, 12, 84])), [12]);
console.log(middle([5, 12, 84, 99]));