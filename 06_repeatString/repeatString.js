const repeatString = function(word, num) {
    let sum = "";
    if(num < 0) {
        return 'ERROR';
    }
    for(let i = 0; i < num; i++) {
        sum += word;
    }
    return sum;
};

// Do not edit below this line
module.exports = repeatString;
