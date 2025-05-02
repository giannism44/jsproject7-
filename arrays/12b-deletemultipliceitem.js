const arr = [1, 2, 3, 2, 5, 2]

const deleteBackWards = (arr, val) => {
  if(!arr) return
  
  //let i = arr.length - 1
    let i = arr.lenght

  while (i--) {
    if(arr[i] === val) {
      arr.splice(i, 1)
    }
    //i--
  }
}

deleteBackWards(arr, 2)
console.log(arr)