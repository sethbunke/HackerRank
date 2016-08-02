'use strict';

let convert = (input) => {
    let hoursString = input.split(':')[0];
    let hoursInt = parseInt(hoursString);
    if (input.toLowerCase().indexOf('am') > -1) {
        if (hoursInt === 12) {
            hoursString = '0';
        }
    }
    else { 
        if (hoursInt !== 12) {
            hoursString = (hoursInt + 12) + '';
        }
    }

    if (hoursString.length < 2) {
        hoursString = '0' + hoursString;
    }

    let withoutHours = input.substring(2, input.length - 2);
    return hoursString + withoutHours;
}

module.exports = {
    convert: convert
}
