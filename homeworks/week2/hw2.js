function alphaSwap(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {

        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            newStr += str.charAt(i).toLowerCase();
        } else {
            newStr += str.charAt(i).toUpperCase();
        }
    }
    return newStr;
}

// JavaScript String charAt() Method: Return the first character of a string.
module.exports = alphaSwap