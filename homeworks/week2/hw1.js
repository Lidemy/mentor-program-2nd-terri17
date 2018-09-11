function stars(n) {
    var array = [];
    var star = '*';
    for (var i = 1; i <= n; i++) {
        var each_item = '';

        for (var j = 1; j <= i; j++) {
            each_item += star;
        }

        array.push(each_item);
    }
    return array;
}

module.exports = stars;