'use strict'

let createStaircase = (n) => {
    let rows = [];
    for (let i = n - 1; i >= 0; i--) {
        console.log(i);
        let result = Array(i + 1).join("X") + Array(n - i + 1).join("#");
        rows.push(result);
    }
    return rows;
};

module.exports = {
    createStaircase: createStaircase
}