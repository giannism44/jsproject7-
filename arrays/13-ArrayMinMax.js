const ages = [20, 30, 50, 18, 34]

function getMin(arr) {
  if(!arr) return

  let minVal = Math.min(...arr)
  let minPostition = arr.indexOf(minVal)
  return [minVal, minPostition]
}

function getMax(arr) {
  if(!arr) return

  let maxVal = Math.max(...arr)
  let maxPostition = arr.indexOf(maxVal)
  return [maxVal, maxPostition]
}

console.log(getMin(ages))
console.log(getMax(ages))