function greaterThan(first_number) {
    return second_number => second_number > first_number;
}

let greaterThan50 = greaterThan(50);
console.log(greaterThan50(89));
console.log(greaterThan50(35));
// -> true
// -> false

console.log(greaterThan(40)(23));
// -> false

