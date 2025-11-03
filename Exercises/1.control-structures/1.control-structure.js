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
