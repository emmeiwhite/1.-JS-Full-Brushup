// 1. Operations that lead to NaN

console.log(0 / 0)
console.log(Infinity - Infinity)
console.log(23 * 'hg')

// 2. String Operations

console.log('This is the first line \nAnd this is the second line')
console.log('A newline character can be written as "\\n"')

// 3. Template Literals: Apart from being able to span lines, they can also embed other values (even Expressions)

console.log(`Half of 90 is ${90 / 2}`)

// 4. Not all operator need to have symbols, some have characters like typeof operator

console.log(typeof 434.5)
console.log(typeof true)
console.log(typeof 'hi')
console.log(typeof function () {})
console.log(typeof {})

// 5. Boolean Types: It is often useful to have values that distinguish only between two possibilities, "yes" and "no" or "on" and "off".

console.log(3 > 5)
console.log('Abc' > 'efg') // uppercase letters are always considered lower than lowercase letters

console.log(NaN === NaN) // Only JavaScript value not equal to itself

// Ternary operator, undefined and null

console.log(true ? 'Is life a test? true' : 'Someone is false')
console.log({ age: undefined })

let person = {}

console.log(person)

let doctor = null // No doctor available right now - explicitly defined by the programmer
let outOfStockItems // The JS Engine decides to keep it as undefined, assuming no value yet

// Short-Circuit Operator
console.log(null || 'Emmeiwhite')
console.log('Reality' || 'Friction')

console.log(true && 'It is the truth')
console.log(false && 'It is false')

/** DAY-2 JavaScript Brushup */

// Binding or Variable: Thus far we have learned to generate values and use operators on the values. Now, we'll see how does a program keep an internal state. How does a program remembers things Insha'Allah

let catchhold = 5 * 5
console.log(catchhold)

let luigiesDebt = 140 // Defined the binding for the debt that luigi owes me
luigiesDebt = 140 - 35 // After luigie paid 35$ back, the binding now holds the pending new debt

// Function as value.Piece of program wrapped in a value. Some functions produces "Side Effects" while others produce a value

console.log(Math.max(2, 4, 1, 6, 8))
