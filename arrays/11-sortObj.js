const objArray = [
  {id: 1, first: "Νίκος", age: 23},
  {id: 2, first: "Ανδρέας", age: 40},
  {id: 3, first: "Κώστας", age: 20},
  {id: 4, first: "Κώστας", age: 18}
]

//Sort by age
objArray.sort(function(a, b){
  return a.age - b.age
})

console.log(objArray)

//Sort by first and age
objArray.sort(function(a , b){
  if(a.first === b.first){
    return a.age - b.age
  }
  return a.first.localeCompare(b.first)    //Ταξινομεί συμβολοσειρές ανάλογα με τη γλώσσα του υπολογιστή, είτε στα ελληνικά είτε στα αγγλικά.
})
console.log(objArray)