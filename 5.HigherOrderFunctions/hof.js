// Sum problem in two ways: 1-10

let total = 0,
  count = 1

while (count <= 10) {
  total += count
  count++
}

console.log(total)

// range(3,8) -> [3,4,5,6,7,8]
function range(start, end) {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

// sum(arr);

function sum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sum(range(1, 10)))

// Abstracting Repetition: Plain functions are a good way to build abstractions.
// It is common for a program to do something for a given number of times. And we can use for loop for that like this:
console.log('repeating something 10 time with arrays')
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Abstracting out logging n times something with function
console.log('repeat log')
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

repeatLog(5)

// But what if we want to do something other than logging the numbers?
// Since "doing something" can be represented by a function
// And 'functions are just values' and we can pass our action (doing something function) as a "function value"

/** In simple words for mental model: Repeat an action(a function does this action) n times */

console.log('************* Abstrations - Mental Model for Real Programming **************')
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

/* ---
function action(num) {
  console.log(num)
}
  --- */

repeat(3, console.log)

let labels = []

repeat(5, i => {
  labels.push(`Unit ${i}`)
})

console.log(labels)

// We can notice a pattern. For each array element iteration, we are literally executing the function (action)

/** --- Let me practice some patterns where a function is passed as an action - doing something. Passing functions as values --- */

// 1. Create new function from other function, when we return the function
function getTaller(heightToBeAdded) {
  return oldHeight => {
    return oldHeight + heightToBeAdded
  }
}

const newHeightFxn = getTaller(2)

const newHeight = newHeightFxn(8)
console.log(newHeight)

// 2. Make multiplier

function makeMultiplier(multiplier) {
  return num => num * multiplier
}

const double = makeMultiplier(2)
const triple = makeMultiplier(3)
console.log(double(5)) // 10
console.log(triple(5)) // 15

//Think of it like this:

// A function can either do work right now or return a tool that knows how to do work later.

function noisy(f) {
  return (...args) => {
    console.log('Calling with', args)
    let result = f(...args)
  }
}

// forEach

console.log('The inbuild HOF forEach')

const arrayElems = ['A', 'B', 'C']
arrayElems.forEach(elem => {
  console.log(elem)
})

// The most important area where higher-order function shine is data processing.
// Let's go with this data for SCRIPTS. The binding contains an array of objects, each of which describes a script
var SCRIPTS = [
  {
    name: 'Adlam',
    ranges: [
      [125184, 125259],
      [125264, 125274],
      [125278, 125280]
    ],
    direction: 'rtl',
    year: 1987,
    living: true,
    link: 'https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet'
  },
  {
    name: 'Caucasian Albanian',
    ranges: [
      [66864, 66916],
      [66927, 66928]
    ],
    direction: 'ltr',
    year: 420,
    living: false,
    link: 'https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet'
  },
  {
    name: 'Ahom',
    ranges: [
      [71424, 71450],
      [71453, 71468],
      [71472, 71488]
    ],
    direction: 'ltr',
    year: 1250,
    living: false,
    link: 'https://en.wikipedia.org/wiki/Ahom_alphabet'
  }
]

// Question now is all about processing data, Right and that too with HOFs.

// Question-1) find the scripts in the data set that are still in use?

const livingScripts = SCRIPTS.filter(script => {
  return script.living
})

console.log('The living scripts are: ')
console.log(livingScripts)
