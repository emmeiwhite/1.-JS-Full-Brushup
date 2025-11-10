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
