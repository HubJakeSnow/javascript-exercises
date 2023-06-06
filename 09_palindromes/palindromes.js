const palindromes = function (word) {
    const lowerWord = word.toLowerCase(); // Converts the word to lowercase
    const cleanedWord = lowerWord.replace(/[^A-Za-z]/g, ""); // Remove non-alphabetic characters
    const revWord = cleanedWord.split("").reverse().join(""); // Reverses the word
    if (cleanedWord === revWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;