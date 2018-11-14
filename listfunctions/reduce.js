let orders = [
  { amount : 250 },
  { amount : 400 },
  { amount : 100 },
  { amount : 325 }
]

let sum = orders.reduce( (sum , order )=> {
    console.log(sum)
    return sum + order.amount 
  }
  , 0)
console.log(sum)

/*
let reduce = (f, start, array) => {
  var acc = start
  for (var i = 0; i < array.length; i++) {
    acc = f(array[i], acc)
  }
  return acc
}

let values = [1,2,3,4,5]

let sum =  reduce((x,y) => x + y, 0, values)

console.log(sum)
*/