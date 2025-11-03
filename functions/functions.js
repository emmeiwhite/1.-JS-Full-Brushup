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
