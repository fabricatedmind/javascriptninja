'use strict';

function infiltrate(person){
    console.log("PERSON: "+person);
    console.log("ARGUMENT: "+arguments[0]);
    arguments[0] = "blah";
    
    console.log("PERSON AGAIN: "+person);
    console.log("ARGUMENT AGAIN: "+arguments[0]);
}

infiltrate("Noblah");