function add(a, b) {
    var answer =[];

    //字串調整為相同長度
    var string_length = find_larger_string_length(a,b);
    var a = adjust_to_same_length(a, string_length);
    var b = adjust_to_same_length(b, string_length);
    var a_number,b_number,position, sum, carry=0;

    //進行加總
    for(var i = string_length-1; i >= 0; i--){
        //取出位數
        a_number = parseInt(a.charAt(i));
        b_number = parseInt(b.charAt(i));

        //相加，進位
        sum = a_number + b_number + carry;

        if(sum>=10) {
            carry = 1;
            var number = [sum-10];
            answer = number.concat(answer);
        }else{
            carry = 0;
            var number = [sum]
            answer = number.concat(answer);
        }
    }
    
    //首位進位
    if(carry === 1){
        var number = [1];
        answer = number.concat(answer);
    }

    return answer.join('');
}


function find_larger_string_length(a,b){
    if(a.length >= b.length){
        return a.length;
    }else{
        return b.length;
    }
}

function adjust_to_same_length(x, string_length){
    while(x.length<string_length){
        x = '0'+ x;
    }
    return x;
}

module.exports = add;