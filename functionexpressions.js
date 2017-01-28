function skulk(ninja){
    return performAction(ninja, "skulking");
}

var performAction = function(person, action) {
    return person + " - "+ action;
};

var rule = daimyo => performAction(daimyo, "ruling");

console.log(skulk("Hattori"));
console.log(rule("Oda Nobunaga"));
