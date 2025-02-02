
function jam(item1 , item2) {

    const a = item1;
    const b = item2;
    const c = a+b;
    
console.log(c);
    
};
function menha(item1 , item2) {

    const a = item1;
    const b = item2;
    const c = a-b;
    
console.log(c);
    
};
function zarb(item1 , item2) {

    const a = item1;
    const b = item2;
    const c = a*b;
    
console.log(c);
    
};
function taghsim(item1 , item2) {

    const a = item1;
    const b = item2;
    const c = a/b;
    
console.log(c);
    
};
module.exports.plus = jam;
module.exports.mines = menha;
module.exports.zarb = zarb;
module.exports.taghsim = taghsim;
//this is exports for node js
