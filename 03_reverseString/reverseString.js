const reverseString = function(word) {
    let wordArray = word.split("");
    wordArray.reverse();
    reversedString = wordArray.join("");
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
