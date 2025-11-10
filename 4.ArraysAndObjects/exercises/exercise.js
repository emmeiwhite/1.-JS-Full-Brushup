// 1. Range problem.

function range(start, end) {
  let arr = []
  for (let count = start; count <= end; count++) {
    arr.push(count)
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
