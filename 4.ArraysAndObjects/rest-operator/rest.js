// Rest Operator: A function receiving any number of arguments with rest operator

/** Let's write the defintion of a Math.max function ourselves */

function max(...numbers) {
  let maxNumber = -Infinity
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]
    }
  }
  return maxNumber
}

console.log(max(87, 21, -66, 48, 95, -10))

// 2. Spread Operator

const numbers = [5, 1, 7]

console.log(max(...numbers))

// It is possible to include an array like that along with other arguments

max(9, ...numbers, 2) // max(9,5,1,7,2) ->9

// Square bracket array notation similarly allows the triple dot-notation to spread another array into the newArray

let words = ['never', 'fully']
console.log('will', ...words, 'understand') // → ["will", "never", "fully", "understand"]

// This even words in curly brace objects --- where it adds all properties from another object

let coords = { x: 10, y: 20 }
console.log({ ...coords, y: 15, z: 1 })

let sindBaadTheSailer = {
  name: 'Sindbad The Sailer',
  totalVoyages: 7,
  sindbadVoyages: [
    "The Island-Whale and the Roc's Egg",
    'The Valley of Diamonds and Serpents',
    'The Island of the Man-Eating Giants',
    'The Old Man of the Sea',
    'The Serendib Kingdom and Elephant Graveyard',
    'The Shipwreck and the Island of Apes',
    'The Final Journey and Retirement'
  ]
}

const updatedSindbad = { ...sindBaadTheSailer, wealth: 'gained' }
console.log(updatedSindbad)
const jsonDataForWeb = JSON.stringify(sindBaadTheSailer)

console.log(
  'The data is serialised to be send over the internet. A flat simple description of data in JSON format is quite a norm.'
)
console.log(jsonDataForWeb)

// Assuming that we are receiving the data in JSON format, To work on it, we will need to parse it so that we can use the JS methods and perform operations on the data
const jsonDataReceived = JSON.parse(jsonDataForWeb)

console.log(jsonDataReceived)

// This is allowed in JavaScript for var and function declaration
function foo() {
  console.log('Move forward and think about your goals')
}

function foo() {
  console.log('We are here')
}

foo()

// Random numbers between 0 and 15

const randomNumber = Math.floor(Math.random() * 15)
console.log(randomNumber)

// Object De-Structuring

let { age } = { name: 'Faraji', age: 23 }

console.log(age)

// Optional Property Access
function city(object) {
  return object?.address?.city
}

console.log(city({ addres: { city: 'Manhattan' } }))
console.log(city({ name: 'Vera' })) // No address provided here. Here we'll get undefinedx
