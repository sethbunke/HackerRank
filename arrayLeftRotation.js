'use strict'

let rotateArrayLeft = (arr, k) => {
    let length = arr.length;
    let remainder = length % k;
    if (remainder !== 0) {
        // for (let i = 0; i < remainder; i++) {
        //     let item = arr.pop();
        //     arr.unshift(item);
        // }
        
        let itemsToMove = arr.splice(length - remainder, remainder);
        itemsToMove.forEach(item => { 
            arr.unshift(item)
        });
    }

    return arr;
}

module.exports = {
    rotateArrayLeft : rotateArrayLeft
}