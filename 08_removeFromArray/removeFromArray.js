const removeFromArray = function(arr, num, ...theRest) {
    for(const rest of theRest) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === rest) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {arr.splice(i, 1); i--;}
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
