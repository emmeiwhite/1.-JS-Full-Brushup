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
