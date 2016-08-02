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

let testPlusMinus = () => {
    let plusMinus = require('./plusMinus');
    let result = plusMinus.calculatePercentages([-4,3,-9,0,4,1]);
    assert(result['negative'], 0.333333);
    assert(result['positive'], 0.500000);
    assert(result['zero'], 0.166667);    
    console.log('plusMinus: success');
}


//07:05:45PM

let testTwentyfourHourClock = () => {
    let twentyfourHourClock = require('./twentyfourHourClock');
    let result1 = twentyfourHourClock.convert('07:05:45PM'); 
    assert('19:05:45', result1);  
    let result2 = twentyfourHourClock.convert('08:33:22AM'); 
    assert('08:33:22', result2);  
    let result3 = twentyfourHourClock.convert('12:44:11AM'); 
    assert('00:44:11', result3);
    console.log('plusMinus: success');
}

testTwentyfourHourClock();

//testPlusMinus();

//testStaircase();

//testDiagonalDifference();