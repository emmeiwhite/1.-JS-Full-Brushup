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
