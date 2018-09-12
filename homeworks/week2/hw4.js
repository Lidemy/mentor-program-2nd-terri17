function isPalindromes(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }

    if (str === newStr) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPalindromes