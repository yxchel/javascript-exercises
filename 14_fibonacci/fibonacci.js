const fibonacci = function(times) {
    let firstNum = 1;
    let add = 0;
    let orig = 0;
    times = Number(times);
    if(times == 0) {
        return 0;
    }
    if(times < 0) {
        return "OOPS";
    }
    for(i = 0; i < times - 1; i++) {
        orig = add;
        add = firstNum;
        firstNum += orig;
    }
    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
