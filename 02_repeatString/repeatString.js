const repeatString = function(string, numOfReapetedTimes) {
    let completeString = '';
    if (numOfReapetedTimes <0) {
        return 'ERROR';
    }
    for (let i =1; i<=numOfReapetedTimes; i++) {
        completeString += string;
    }
    return completeString;
};

// Do not edit below this line
module.exports = repeatString;
