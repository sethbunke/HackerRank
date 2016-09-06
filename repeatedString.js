'use strict';

let getCount = (inputString, stringToFind, nLetters) => { 
    //return 'test';
    //let str = inputString.toLowerCase().split('');
    let countPerString = inputString.split(stringToFind).length - 1;
    let countInFullString = Math.floor(nLetters / inputString.length);
    return 'test';
};

module.exports = {
    getCount: getCount
}