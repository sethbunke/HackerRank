'use strict';

let getCount = (inputString, stringToFind, nLetters) => {     
    let inputLength = inputString.length;
    let countPerString = countOccurrencesInString(inputString, stringToFind); 
    let countInFullString = Math.floor(nLetters / inputLength);
    let remainder = nLetters % inputLength;
    let countInSubstring = countOccurrencesInString(inputString.substring(0, remainder), stringToFind);
    return countInFullString + countInFullString;
};

let countOccurrencesInString = (inputString, stringToFind) => {
    var regExp = new RegExp(stringToFind, 'gi');
    return (inputString.match(regExp) || []).length;
}

module.exports = {
    getCount: getCount
}