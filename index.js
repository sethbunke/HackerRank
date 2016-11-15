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


let testRepeatedString = () => {
    let repeatedString = require('./repeatedString');
    let result1 = repeatedString.getCount('aba','a',10);   
    assert(7, result1);  
    let result2 = repeatedString.getCount('aba','c',10);   
    assert(0, result2);  
}

let testArrayLeftRotation = () => {
    let arrayLeftRotation = require('./arrayLeftRotation');
    // let result1 = arrayLeftRotation.rotateArrayLeft([1,2,3,4,5], 4);   
    // assert([5,1,2,3,4], result1); 

    //HANDLE IF THE NUMBER OF ROTATIONS IS LESS THAN THE LENGTH OF THE ARRAY

    let data2 = [431, 397, 149, 275, 556, 362, 852, 789, 601, 357, 516, 575, 670, 507, 127, 888, 284, 405, 806, 27, 495, 879, 976, 467, 342, 356, 908, 750, 769, 947, 425, 643, 754, 396, 653, 595, 108, 75, 347, 394, 935, 252, 683, 966, 553, 724, 629, 567, 93, 494, 693, 965, 328, 187, 728, 389, 70, 288, 509, 252, 449];
    let k2 = 48;     

    let result2 = arrayLeftRotation.rotateArrayLeft(data2, k2);   
    assert([5,1,2,3,4], result1); 

    //let result = rotateArrayLeft(a, k);
    let output = '';
    for (let i = 0; i < result1.length; i++){
        output += result1[i] + ' ';
    }
    console.log(output);
}

let testCompareHasTables = () => {
    let compareHashTables = require('./compareHashTables.js');
}


testCompareHasTables();

//testArrayLeftRotation();



//testRepeatedString();

//testTwentyfourHourClock();

//testPlusMinus();

//testStaircase();

//testDiagonalDifference();