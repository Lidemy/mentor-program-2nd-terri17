function reverse(str) {
    var newStr='';
    var strLength = str.length;
    for(var i=0; i<=strLength; i++){
        newStr+=str.charAt(strLength-i);
    }
    console.log(newStr);
}
