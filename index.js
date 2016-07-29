'use strict'
let assert = require('assert');

let testDiagonalDifference = () => {    
    let diagonalDifference = require('./diagonalDifference');
    let data = [[11,2,4],[4,5,6],[10,8,-12]];
    let result = diagonalDifference.getDifference(data);
    assert(result,15)
    console.log('testDiagonalDifference: success');
}

let testStaircase = () => {
    let staircase = require('./staircase');
    let result = staircase.createStaircase(4);
}

testStaircase();

//testDiagonalDifference();