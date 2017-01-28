var store = {
    nextId: 1,
    cache: {},
    add: function(fn){
        console.log("FN ID: "+fn.id);
        if (!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
}

function ninja(blah1){};
function blah(){};
function yoyo(){};
console.log(store.add(ninja));
console.log(store.cache.id);
console.log(store.add(ninja));
console.log(store.add(blah));
console.log(store.add(yoyo));
console.log(store.cache);