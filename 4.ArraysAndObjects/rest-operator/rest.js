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
