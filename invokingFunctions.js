function skulk(name) {
    console.log("skulk(): "+name);
}
function Ninja(name) {
    console.log("Ninja(): "+name);
}

skulk('Hattori');
(function(who){ return who; })('Hattori');

var ninja = {
    skulk: function(){
        console.log("ninja.skulk()");
    }
};

ninja.skulk('Hattori');
//ninja = new Ninja('Hattori1');
//skulk.call(ninja, 'Hattori2');
//skulk.apply(ninja, ['Hattori3']);