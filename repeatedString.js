'use strict';

const getCount = (inputString, stringToFind, nLetters) => {     
    const inputLength = inputString.length;
    const countPerString = countOccurrencesInString(inputString, stringToFind); 
    const countInFullString = Math.floor(nLetters / inputLength);
    const remainder = nLetters % inputLength;
    const countInSubstring = countOccurrencesInString(inputString.substring(0, remainder), stringToFind);
    return (countPerString * countInFullString) + countInSubstring;
};

const countOccurrencesInString = (inputString, stringToFind) => {
    const regExp = new RegExp(stringToFind, 'gi');
    return (inputString.match(regExp) || []).length;
}

module.exports = {
    getCount: getCount
}