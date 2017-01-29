var puppet = {
    rules: false
};

function Emperor() {
    this.rules = true;
    return puppet;
}

var emperor = new Emperor();

var test = emperor === puppet;
console.log("emperor === puppet: "+test);

console.log("EMPEROR.RULES: "+emperor.rules); 