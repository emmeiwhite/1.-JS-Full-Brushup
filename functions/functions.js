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
