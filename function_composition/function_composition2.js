function add(x, y) { return x + y; }

function square(z) { return z * z; }

function composeTwo(f, g) {
    return (x, y) => f (g (x , y)); 
}

let addThenSquare = composeTwo(square, add);
console.log(addThenSquare(7, 3));
console.log(composeTwo(square, add)(2,3));
// -> 100
// -> 25
