console.log('Running')

// Question-1) Find 2 to the power 10 with for loop

let result = 1

for (let counter = 0; counter < 10; counter++) {
  result = result * 2
}

// let counter=0; defines a binding for the state counter, this is the state of the for loop in this case
console.log(`2 to the power 10 is: `, result)

// Question-2) Find the first number that is both greater than or equal to 20 and divisible by 7

for (let current = 20; ; current++) {
  if (current % 7 === 0) {
    console.log(current)
    break
  }
}
