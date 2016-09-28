'use strict'

let rotateArrayLeft = (arr, k) => {
    let length = arr.length;
    let remainder = length % k;
    if (remainder !== 0) {        
        let itemsToMove = arr.splice(length - remainder, remainder).reverse();
        itemsToMove.forEach(item => { 
            arr.unshift(item)
        });
    }
    return arr;
}

module.exports = {
    rotateArrayLeft : rotateArrayLeft
}