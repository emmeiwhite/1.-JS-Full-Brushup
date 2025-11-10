// Sum problem in two ways: 1-10

let total = 0,
  count = 1

while (count <= 10) {
  total += count
  count++
}

console.log(total)

// range(3,8) -> [3,4,5,6,7,8]
function range(start, end) {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

// sum(arr);

function sum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sum(range(1, 10)))

// Abstracting Repetition: Plain functions are a good way to build abstractions.
// It is common for a program to do something for a given number of times. And we can use for loop for that like this:
console.log('repeating something 10 time with arrays')
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Abstracting out logging n times something with function
console.log('repeat log')
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

repeatLog(5)

//
