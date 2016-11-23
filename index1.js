console.log('test1');

var x = 1;


var testCompareHasTables = function() {
    var compareHashTables = require('./compareHashTables.js');

    var arr1 = 'give me one grand today night'.split(' ');
    var arr2 = 'give one grand today'.split(' ');    
    var result1 = compareHashTables.compare(arr1, arr2)

    var arr3 = 'give one X grand today'.split(' ');
    var result2 = compareHashTables.compare(arr1, arr3);

    var arr4 = 'give one X grand today'.split(' ');
    var arr5 = 'Give'.split(' ');
    var result2 = compareHashTables.compare(arr4, arr5);

    //throw Error('counts off');
}


testCompareHasTables();