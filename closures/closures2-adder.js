function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add2 = makeAdder(2)

console.log(add2(2))