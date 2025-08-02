const palindromes = function (word) {
    let letters = "abcdefghijklmnopqrstuvwxyz1234567890";
    word = word.toLowerCase();
    let newWord = "";
    for(let i = 0; i < word.length; i++) {
        if(letters.includes(word.charAt(i))) {
            newWord += word.charAt(i);
        }
    }
    let isPalindrome = false;
    for(let i = 0; i < newWord.length / 2; i++) {
        if(newWord.charAt(i) == newWord.charAt(newWord.length - i - 1)) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;