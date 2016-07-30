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
    let result = staircase.createStaircase(6);
    assert(result[0], '   #');
    assert(result[1], '  ##');
    assert(result[2], ' ###');
    assert(result[3], '####');
    assert(result.length, 4);
    console.log('testStaircase: success');
}

testStaircase();

//testDiagonalDifference();