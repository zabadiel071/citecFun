function applyTwice(f, number) {
    return f (f(number));
}

function addNumbers(n) {
    return m => m + n;
}

console.log(applyTwice(addNumbers(2), 10));
console.log(applyTwice(m => m + 2, 18));
// -> 14
// -> 22