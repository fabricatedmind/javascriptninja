function whatsMyContext(){
    return this;
}

//console.log(whatsMyContext());

var getMyThis = whatsMyContext;

//console.log(getMyThis());

var ninja1 = {
    getMyThis: whatsMyContext
};

console.log(ninja1.getMyThis());

