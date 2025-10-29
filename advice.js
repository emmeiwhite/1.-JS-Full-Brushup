console.log('Seek Advice')

// Let's get all our DOM elements
const advicEl = document.querySelector('.advice')
const countEl = document.querySelector('.count')
const btnEl = document.querySelector('.btn')

// let's set the initial state (Bindings)
let advice = ''
let count = 0

// Now as the user clicks on the button we'll get an advice from the third party API

const URL = 'https://api.adviceslip.com/advice'

async function getAdvice() {
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data)
  const { slip } = data

  advicEl.textContent = slip?.advice
}

// btnEl click will call getAdvice function and fetch the advice and render on to the DOM

btnEl.addEventListener('click', getAdvice)
