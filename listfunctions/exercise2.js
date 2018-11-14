let people = [
  { name : 'john' , product: 'coca-cola' , price : 10.50, quantity: 3  },
  { name : 'john' , product: 'chips' , price : 8.50, quantity: 2  },
  { name : 'juan' , product: 'pepsi' , price : 11.50, quantity: 5  },
  { name : 'juan' , product: 'doritos' , price : 7.50, quantity: 4  },
]

let summary = people.reduce( (data, order) => {
    data[order.name] = data[order.name] || []
    data[order.name].push({
      product : order.product,
      price : order.price,
      quantity : order.quantity,
      amount : order.price * order.quantity
    })
    return data
  }, { } )

console.log(JSON.stringify(summary , null, 2))