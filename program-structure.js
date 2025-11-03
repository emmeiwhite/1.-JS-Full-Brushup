console.log('Running')

// Question-1) Find 2 to the power 10 with for loop

let result = 1

for (let counter = 0; counter < 10; counter++) {
  result = result * 2
}

// let counter=0; defines a binding for the state counter, this is the state of the for loop in this case
console.log(`2 to the power 10 is: `, result)
