function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];

    }
    return sum;
}

console.log(sum(15,14,13,12,11,10,9,8,7,6,5,4,3,2,1));