// Pattern: Right Angled Triangle

for (let i = 0; i < 7; i++) {
  let result = '' // resetting to empty string after each outer iteration
  for (let j = 0; j <= i; j++) {
    result += '# '
  }

  console.log(result)
}
