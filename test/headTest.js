const head = require('../head');
const assertEqual = require('../assertEqual');

console.log(head([5, 6, 7]));



assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");