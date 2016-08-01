'use strict';

let convert = (value, n, precision) => {
    return parseFloat((value / n).toFixed(precision));
}

let calculatePercentages = (input) => {
    let n = input.length;
    let zeroes = 0;
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < n; i++) {
        let val = input[i];
        if (val > 0) {
            positive += 1;
        } 
        else if(val < 0) {
            negative += 1;
        }
        else {
            zeroes += 1;
        }
    }

    const FIXED_LENGTH = 6;

    return {
        "negative" : convert(negative, n, FIXED_LENGTH),
        "positive" : convert(positive, n, FIXED_LENGTH),
        "zero" : convert(zeroes, n, FIXED_LENGTH)
    }
}

module.exports = {
    calculatePercentages: calculatePercentages
}