function join(str, concatStr) {
    var newStr = '';
    for(var i=0; i<(str.length-1); i++){
        newStr += str[i]+concatStr ; 
    }
    newStr += str[str.length-1];
    return(newStr);
}

function repeat(str, times) {
    var newStr = '';
    for(var i=1; i<=times; i++)
        newStr += str;
    return(newStr);
}
