const R = require('ramda');
const arr = [2,5,1,10,9]; 

function maximum(arr) {
    if(arr.length === 0) return 'No se puede obtener el maximo de una lista vacia'
    else {
        if (arr.length === 1) return arr[0]
        else {
            if(R.head(arr) > maximum(R.tail(arr))) return R.head(arr)
            else return maximum(R.tail(arr))
        }
    }
}

console.log(arr);
console.log(maximum(arr));
// -> [2,5,1,10,9]
// -> 10