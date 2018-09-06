function capitalize(str) {
    var firstChar = str.charAt(0).toUpperCase()
    var otherChar = str.slice(1)
    var newStr = firstChar+otherChar;
    return(newStr);
}
  
//JavaScript String charAt() Method:Return the first character of a string.
//JavaScript String toUpperCase() Method:Convert the string to uppercase letters.