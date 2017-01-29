function Ninja() {
    this.skulk = function() {
        return this;
    };
    return 1;
}


//var ninja2 = new Ninja();
var test = Ninja() === 1;
console.log("NINJA() ===1: "+test);
var ninja = new Ninja();

console.log(typeof ninja);
console.log(typeof skulk);
//console.log("NINJA1: " + ninja1.skulk());
// var test = ninja1.skulk() === ninja1;
// var test2 = ninja2.skulk() === ninja2;

// console.log("TEST: "+test + " TEST2: "+test2);
// console.log("NINJA2: " + ninja2.skulk());