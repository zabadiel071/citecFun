let people = [
  { name : 'john' , country : 'usa'},
  { name : 'juan' , country : 'mexico'},
  { name : 'jean' , country : 'france' },
  { name : 'giovanni', country: 'italy'},
  { name : 'ivan' , country: 'russia'}
]

let peopleUpper = people.map(person => {
  return { name: person.name.toUpperCase() , country : person.country.toUpperCase() }
})
console.log('peopleUpper:' , peopleUpper)
console.log('people:' , people)


/*
implementación de map
let map = (array, f) => {
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    newArray[i] = f(array[i])
  }
  return newArray;
}

let peopleUpper = map(people , function(x) {
  return { name: x.name.toUpperCase() , country : x.country.toUpperCase() }
})

console.log('peopleUpper:' , peopleUpper)
console.log('people:' , people)
*/

/*
Se obtiene inmutabilidad
Desventajas : está limitado a un solo caso

var peopleUpper = []
for (var i = 0; i < people.length; i++) {
  var person = {
    name : people[i].name.toUpperCase() , 
    country : people[i].name.toUpperCase()
  }
  peopleUpper.push(person)
}

console.log(people)
console.log(peopleUpper)
*/

/*
Mutable
for (var i = 0; i < people.length; i++) {
  people[i].name = people[i].name.toUpperCase()
  people[i].country = people[i].country.toUpperCase()
}

console.log(people)
*/