// 1. Range problem.

function range(start, end) {
  let arr = []
  for (let count = start; count <= end; count++) {
    arr.push(count)
  }

  return arr
}

console.log(range(2, 9))
