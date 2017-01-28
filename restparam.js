function multiMax(first, ...remainingNumbers){
    var sorted = remainingNumbers.sort(function(a,b){
        return b - a;
    });
    return first * sorted[0];
}

console.log(multiMax(3,3,4,5));