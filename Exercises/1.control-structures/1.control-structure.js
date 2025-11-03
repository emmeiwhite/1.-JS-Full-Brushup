// Pattern: Right Angled Triangle
const patternDiv = document.querySelector('.pattern')

let result
for (let i = 0; i < 7; i++) {
  result = '' // resetting to empty string after each outer iteration
  for (let j = 0; j <= i; j++) {
    result += '# '
  }

  addPara(result)
}

function addPara(result) {
  const para = document.createElement('p')
  para.textContent = result
  patternDiv.append(para)
}

// Fizz Buzz Problem

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Fizz Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

// Chess Board Problem

for (let i = 0; i < 8; i++) {
  // Check whether i is even or odd (Because even rows start with "empty space" and odd rows start with a "#" )

  let resultRow = ''

  if (i % 2 === 0) {
    resultRow = 'O' // let's assume O is an empty space
  } else {
    resultRow = 'X' // let's assume X is '#' for better visibility
  }

  for (let j = 0; j < 7; j++) {
    // Since we are setting up the initial character above already, we have to iterate 7 times only with j
    let lastChar = resultRow[resultRow.length - 1]

    //   Flip X and O

    if (lastChar === 'X') {
      resultRow += 'O'
    } else {
      resultRow += 'X'
    }
  }

  console.log(resultRow)
}
