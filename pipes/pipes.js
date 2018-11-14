const pipe = functions => data => {
  return functions.reduce(
      (value, f) => f(value),
      data
    )
}

let cart = [3.12, 45.15, 11.01]

const addSalesTax = (total, taxRate) => (total * taxRate) + total

const tally = orders => pipe([
    x => x.reduce((total,val) => total + val , 0), 
    x => addSalesTax(x,0.16),
    x => `Order total  = ${x.toFixed(2)}`
  ]) (orders)

console.log(tally(cart))