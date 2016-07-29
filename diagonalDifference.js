'use strict'

let sum = (a,b) => { return a + b };

let getDifference = (input) => {
    let primary = [];
    let secondary = [];

    let n = input.length;
    for (let i = 0; i < n; i++) {
        let arr = input[i];
        let index = n - i - 1;
        primary.push(arr[i]);
        secondary.push(arr[index]);
    }    

    let primarySum = primary.reduce(sum);
    let secondarySum = secondary.reduce(sum);

    return Math.abs(primarySum - secondarySum);
};

module.exports = {
    getDifference: getDifference
};
