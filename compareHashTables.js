'use strict';

let compare = function(arr1, arr2) {
    let obj1 = new Object();
    
    let count = 0;
    arr1.forEach(function(element) {
        obj1[element] = element;     
        count += 1;   
    });

    if (arr1.length !== count) {
        throw Error('counts off');
    }

    let arr1ContainsAllArr2 = true;

    for (let i = 0; i < arr2.length; i++) {
        let key = arr2[i];
        let val = obj1[key];

        if (val === undefined) {
            arr1ContainsAllArr2 = false
            break;
        }
    }

    return arr1ContainsAllArr2;
}

module.exports = {
    compare: compare
}