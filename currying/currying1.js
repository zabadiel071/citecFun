function multiply (x, y) { return x * y; }

function curry (f) {
    return x => y => f(x,y);
}

const curriedMultiply = curry(multiply);
const triple = curriedMultiply(3);
console.log(triple(6));
