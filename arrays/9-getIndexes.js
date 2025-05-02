const arr = [1, 2, 3, 4, 5, 2, 5, 8, 6, 9, 9, 2]

//function να επιστρέφει ένα πίνακα με τις θέσεις
//στις οποίες βρίσκεται ένας συγκεκριμένος αριθμός


const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
    if(v == val) {
      indexes.push(index)
    }
  })
    
  return indexes
}

console.log(getIndexes(arr, 2))