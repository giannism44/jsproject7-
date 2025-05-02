const cities = ["Athens", "Paris", "Toronto"]

//Add - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b))   //  Shallow copy

//Copy deep copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const cities2 = structuredClone(cities)

//Shallow copies -- Spread copies
const cities3 = [...cities]

const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = cities.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max index: ${maxIndex}`)