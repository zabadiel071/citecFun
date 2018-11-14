//Funcion impura con efectos secundarios
var z = 8;

function add (y) {
    return z = z + y;
}

console.log(add(10));
console.log(z);
// -> 18
// -> 18

//Funcion pura sin efectos secundarios
var w = 9;

function add2 (x, y) {
    return x + y;
}

console.log(add2(3+5));
// -> 8