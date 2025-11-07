console.log('Functions are everywhere, even I am using log function to output to the console')

/* --- Function: Piece of program in a value has many benefits.
       1) Structure larger prgrams
       2) To avoid repetition
       3) To associate names with sub-programs
       4) And to isolate these sub-programs from each other
--- */

const square = x => x * x

console.log(square(5))

// makeNoise() function: A function with 0 parameters

function makeNoise() {
  console.log('We are here, we are here, we are here!!!')
}

makeNoise()

// Scope:

let x = 23 // global
if (true) {
  let z = 'I am local' // local
  var k = 'I am global' // global
}

console.log(k) // k can be accessed anywhere in the program - Pre-2015 JS

try {
  console.log(z) // referenceError, z is not defined
} catch (error) {
  console.log(error)
}

console.log('let the program continue')

// Function: Using a parameter from the global scope, its own parameter will be accessed
let n = 10 // global scope
let halve = function (n) {
  return n / 2
}

console.log(halve(100)) // 50;

console.log(n) // 10;

// Lexical scope and visibility

console.log('Lexical Scope & Closure')
const hummus = function (factor) {
  console.log(factor)
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor
    if (ingredientAmount > 1) unit += 's'
    console.log(`${ingredientAmount} ${unit} ${name}`)
  }

  ingredient(1, 'can', 'chickpeas')
  ingredient(0.25, 'cup', 'tahini')
  ingredient(0.25, 'cup', 'lemon juice')
  ingredient(1, 'clove', 'garlic')
  ingredient(2, 'tablespoon', 'olive oil')
  ingredient(0.5, 'teaspoon', 'cumin')
}

hummus(5)

// Function as value: A function binding usually simply acts as a name for a specific piece of the program.
let launchMissle = function () {
  missileSystem.launch('now')
}

let safeMode = true
if (safeMode) {
  // Just a regular binding: Reassigning the value for the function
  launchMissle = function () {
    /* do nothing */
  }
}

// Function Declarations

function cube(x) {
  return x * x * x
}

console.log(cube(3))

console.log(`Future say: ${futurecars()}`)

function futurecars() {
  return 'The future is bright for the flying cars'
}

/** Here we notice that function definitions are happily invoked even when used on the lines above their declaration. Function declarations are not part of the normal top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope */

/** Arrow Functions: Introduced in ES-2015 */

const horn = () => {
  console.log('Peep Peep! Dil Tord ke Hasti ho mera! Peep Peep')
}

horn()

const mul = (a, b) => a * b

console.log(mul(2, 4))

/** --- Optional Parameters | Too many or too few arguments. Too many arguments are ignored and too few are assigned undefined--- */

console.log('Optional Parameters: Too few or too many')
function minus(a, b) {
  if (b === undefined) return -a
  return a - b
}

console.log(minus(10))
console.log(minus(50, 10))

function square2(x) {
  return x * x
}

// caller: Here the extra arguments are smartly ignored by JavaScript
const sqrOf4 = square2(4, true, 'Shine & Rise!')
console.log(sqrOf4)

// CLOSURE: What happens to the local bindings when the function that called them is no londer active? Or it has finished its execution?

console.log('The closure in action')
function wrapValue(n) {
  let local = n
  return () => local
}

const wrap1 = wrapValue(5)
console.log(wrap1()) // Note that local bindings gets re-created everytime that they are called

const wrap2 = wrapValue(45)
console.log(wrap2())

const wrap3 = wrapValue('We are here')
console.log(wrap3())

// We can create functions in a creative way: For example that multiplies by a certain value
function multiplier(factor) {
  return num => factor * num
}

const twiceFxn = multiplier(2)

twiceFxn(5)
twiceFxn(30)

/** --- CLOSURE - Revisit --- */

// Function is code + remembered enviroment

function addByNumber(n) {
  return x => n + x
}

const addBy10 = addByNumber(10)
console.log('Add by 10')
console.log(addBy10(40))

console.log('The Farm Problem')
/* --- Exercise:
“Write a function that takes two numbers — cows and chickens —
and prints them with labels (‘Cows’ and ‘Chickens’) so that the numbers always show as three digits (with leading zeros if needed).” --- */

function farmAnimalsCount(cows, chickens) {
  let countCows = String(cows)

  while (countCows.length < 3) {
    countCows = '0' + countCows
  }

  let countChickens = String(chickens)
  while (countChickens.length < 3) {
    countChickens = '0' + countChickens
  }

  return { cows: countCows + ' Cows', chickens: countChickens + ' Chickens' }
}

const { cows, chickens } = farmAnimalsCount(9, 18)

console.log(cows)

console.log(chickens)

// Now, taking out the repeated code and using a function instead.
function zeroPad(number, width) {
  let stringVal = String(number)
  while (stringVal.length < width) {
    stringVal = '0' + stringVal
  }
  return stringVal
}

function printFarmInventory(cows, chickens, ducks) {
  const totalCows = zeroPad(cows, 3)
  const totalChickens = zeroPad(chickens, 3)
  const totalDucks = zeroPad(ducks, 3)
  console.log(totalCows + ' Cows')
  console.log(totalChickens + ' Chickens')
  console.log(totalDucks + ' Ducks')
}

printFarmInventory(2, 20, 6)

/** One Function should perform one task, having only one responsibility because it scales up easily */

// Let's take a good example:

function processOrder(order) {
  // 1.validate
  if (!order.id || !order.amount) throw new Error('Invalid Order')

  /** 2. Business Logic */
  // 2a) Apply discount
  if (order.amount > 1000) return order.amount * 0.9

  // 2b) Convert Currency
  order.amount = order.amount * 84 // USD --> INR

  /** 3. Save to DB */
  console.log('Saving to Database ...', order)
}

/** 
 * 😩 Problem:

Hard to test or reuse just one part.

Validation logic, business logic, and I/O are mixed
 */

/** ✅ Better — Split by Concern (Each Function Does One Thing) */

function validateOrder(order) {
  if (!order.id || !order.amount) throw new Error('Invalid Order')
  return order
}

function paymentDiscount(order) {
  if (order.amount > 1000) order.amount * 0.9
  return order
}

function convertToINR(order) {
  order.amount = order.amount * 84 // USD ---> INR
}

function saveToDB(order) {
  console.log('Saving to Database :', order)
}

function processOrder(order) {
  const processed = [validateOrder, paymentDiscount, convertToINR].reduce(
    (acc, fn) => fn(order),
    order
  )

  saveToDB(processed)
}

/**
 * 🧠 Here’s what’s happening:

Each function handles one single task.

The “pipeline” pattern (reduce with functions) composes them into a flow.

Easy to swap out, test individually, or reuse across projects.

This is the same mindset behind Express middleware and React hooks.
 */

function min(num1, num2) {
  if (num1 < num2) {
    return num1
  } else {
    return num2
  }
}

console.log(`Min of 6 and 2 is : ${min(6, 2)}`)
console.log(`Min of 34 and 89 is : ${min(34, 89)}`)
