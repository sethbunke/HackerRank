

let array = 
    [
        {"name":"Joe", "age":17}, 
        {"name":"Bob", "age":17}, 
        {"name":"Carl", "age": 35}
    ];

const unique = [...new Set(array.map(item => item.age))];

console.log(unique);


let x = 'We promptly judged antique ivory buckles for the next prize';


let str = x.toLowerCase().replace(/\s/g, '').split('');

console.log(str);


const uniqueChars = [...new Set(str.map(x => x))];

console.log(uniqueChars.sort());

let joined = uniqueChars.join('');

let test = 'abcdefghijklmnopqrstuvwxyz';

console.log(joined);