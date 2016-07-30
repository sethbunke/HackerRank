'use strict'

let createStaircase = (n) => {
    let rows = [];
    for (let i = n - 1; i >= 0; i--) {
        let result = Array(i + 1).join(" ") + Array(n - i + 1).join("#");
        rows.push(result);
    }
    return rows;
};

module.exports = {
    createStaircase: createStaircase
}