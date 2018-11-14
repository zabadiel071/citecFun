const R = require('ramda')

const addSalesTax = (total, taxRate) => (total * taxRate) + total

const tally = R.pipe(
    x => x.reduce((total,val) => total + val), 
    x => addSalesTax(x,0.16),
    x =>  `Order total  = ${x.toFixed(2)}` 
  )

let cart = [3.12, 45.15, 11.01]

console.log(tally(cart))