'use strict';

let getCount = (inputString, stringToFind, nLetters) => { 
    //return 'test';
    //let str = inputString.toLowerCase().split('');
    let inputLength = inputString.length;
    let countPerString = inputString.split(stringToFind).length - 1;
    let countInFullString = Math.floor(nLetters / inputLength);
    let remainder = nLetters % inputLength;
    let countInSubstring = inputString.substring(0, remainder).split(stringToFind).length - 1;
    return countInFullString + countInFullString;
};

module.exports = {
    getCount: getCount
}