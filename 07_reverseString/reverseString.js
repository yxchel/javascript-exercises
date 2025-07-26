const reverseString = function(sentence) {
    let letters = sentence.split('');
    let backwards = [];
    for(let i = letters.length - 1; i >= 0; i--) {
        backwards.push(letters[i]);
    }
    let newSentence = backwards.join('');
    return newSentence;




    // BETTER SOLUTION
    // return sentence.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
