function Ninja() {
    this.skulk = function() {
        return this;
    };
}

var ninja1 = new Ninja();
var ninja2 = new Ninja();

console.log("NINJA1: " + ninja1.skulk());
var test = ninja1.skulk() === ninja1;
var test2 = ninja2.skulk() === ninja2;

console.log("TEST: "+test + " TEST2: "+test2);
console.log("NINJA2: " + ninja2.skulk());