let people = [
  { name : 'john' , country : 'usa'},
  { name : 'juan' , country : 'mexico'},
  { name : 'luis' , country : 'mexico'},
  { name : 'pepe' , country : 'mexico'},
  { name : 'jean' , country : 'france' },
  { name : 'giovanni', country: 'italy'},
  { name : 'ivan' , country: 'russia'}
]

/*
let filter = (pred, array) => {
    var newArray = [];
    for (var i = 0; i < array.length; ++i) {
            if (pred(array[i]))
                newArray[newArray.length] = array[i];
        }
        return newArray;
    };

let isMexican = person => person.country === 'mexico'

let justMexican = filter(isMexican , people)


console.log('justMexican:' , justMexican)
console.log('people:' , people)
*/

let justMexican = people.filter(person => person.country === 'mexico')
console.log(justMexican)
