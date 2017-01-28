function isPrime(value){                //
    if(!isPrime.answers){               // Creating cache!?
        isPrime.answers = {};           //
    }
    
    if (isPrime.answers[value] !== undefined){ // checks for cache value
        console.log("cache: "+isPrime.answers[value]);
        return isPrime.answers[value];
    }

    var prime = value !== 1;

    for (var i =2; i < value; i++){
        if(value % i === 0){
            prime = false;
            break;
        }
    }
    //console.log(isPrime.answers);
    return isPrime.answers[value] = prime;   /// stores computed value
}

console.log(isPrime(5));
console.log(isPrime.answers);
console.log(isPrime.answers[5]);
console.log(isPrime(5));

console.log(isPrime(1000012337));
console.log(isPrime.answers);
console.log(isPrime.answers[1000012337]);