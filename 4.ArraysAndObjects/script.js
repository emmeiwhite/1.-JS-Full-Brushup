const listOfNumbers = [2, 3, 5, 7, 11] // storing sequence of values
console.log(listOfNumbers[2]) // 5 Retrieving element 3 from an array

// Arrays are 0 index based. So arr[0] returns the first element.

/** --- Properties: Almost all JavaScript values have properties. The exceptions are null and undefined. --- */
/* --- 
console.log(null.length) 
--- */

// We can access the properties with dot or bracket notation for an object.

const person = {
  firstName: 'Emmeiwhite',
  'Last Name': 'Rather'
}

console.log(person.firstName)
console.log(person['Last Name'])

/** --- Methods : Both string and array values contain a number of properties that hold function values --- */
let doh = 'Doh'
console.log(typeof doh.toUpperCase) // Note we are not calling the property toUpperCase here
// -> function

console.log(doh.toUpperCase())
// -> string

let sequence = [2, 3, 5]
sequence.push(7)
sequence.push(9)
console.log(sequence)

console.log(sequence.pop())
console.log(sequence)

/** Objects: Grouping values or collection of properties */
console.log('Objects: As collection of properties')
const day1 = {
  hasTurnedToSquirrel: false,
  activities: ['work', 'run', 'eat pizza', 'touched tree']
}

console.log(day1.hasTurnedToSquirrel)
console.log(day1.isWolf) // undefined (Very important)
day1.isWolf = false
console.log(day1.isWolf)

// Example-2: Objects: Properties whose names aren't valid  value names or valid numbers are kept in quotes

let descriptions = {
  work: 'Went to work',
  'touched tree': 'Touched the tree'
}

// Returning object with short-hand arrow function

const getObj = n => {
  return {
    prop: n
  }
}

console.log(getObj(5))

// delete operator: If an object is considered as a octopus with any number of tentacles each of which has a name written on it, then delete operator cuts-off the tentacle from such as octobus.

let anObject = { left: 1, right: 2 }
console.log(anObject.left) // 1
console.log(delete anObject.left)

console.log(anObject.left) // undefined

console.log('left' in anObject) // false since property 'left' no longer exist on the object
console.log('right' in anObject) // true, as right still is part of anObject, the tentacle is intact

// Object.keys(): To find out what properties an object has, we can use the Object.keys() function

let point = { x: 34, y: -23 }
const cords = Object.keys(point) // Returns an array of properties ['x','y']
console.log(cords)

const point2 = Object.assign(point)
console.log(point2)

point.x = 13
console.log(point)
console.log(point2)
