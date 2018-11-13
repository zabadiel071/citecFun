let countDownFrom = (num) => {
  if (num > 0 ) return
  countDownFrom(num -1)
}

let reverseArray = (num , arr) => {
   arr.push(num)
   if(num === 0 ) return  arr
   return reverseArray(num - 1 , arr)
}

let result = reverseArray(5 , [])

console.log(result)