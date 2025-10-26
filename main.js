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
