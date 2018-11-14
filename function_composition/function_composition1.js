function g (x) { return x * x + 1; }

function f (x) { return x + 2; }

console.log(f(g(2)));
console.log(f(g(5)));
// -> 7
// -> 28