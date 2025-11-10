// 1. Range problem.

function range(start, end) {
  let arr = []
  for (let count = start; count <= end; count++) {
    arr.push(count)
  }

  return arr
}

// 1b. Modified range() problem with a step value

function modifiedRange(start, end, step = 1) {
  if (step === 1) {
    return range(start, end)
  }

  let arr = []

  for (let i = start; i <= end; i += step) {
    arr.push(i)
  }

  return arr
}

console.log(range(2, 9))

// 2. Sum of range(). sum(range(start, end))

function sum(arr) {
  let sumAcc = 0
  // Iterate through the array values
  for (let i = 0; i < arr.length; i++) {
    sumAcc = sumAcc + arr[i]
  }

  return sumAcc
}

console.log('The sum range problems:')
console.log(sum(range(1, 10)))
console.log(sum(range(9, 10)))
console.log(modifiedRange(5, 8))
console.log(modifiedRange(3, 9, 2))
