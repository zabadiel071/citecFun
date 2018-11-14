let countDownFrom = (num) => {
  console.log(num)
  if (num === 0 ) return num
  countDownFrom(num -1)
}

countDownFrom(10)

/*
let reverseArray = (num , arr) => {
   arr.push(num)
   if(num === 0 ) return  arr
   return reverseArray(num - 1 , arr)
}

let result = reverseArray(5 , [])

console.log(result)
*/