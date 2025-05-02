const jsobj = {
  id: 1, 
  hobbies: [{id: 1, title: "gym"}, {id: 2, title: "music"}]
}

// Serialization
const jsonStr = JSON.stringify(jsobj)
console.log(jsonStr)

// Deserialization
const jsobj2 = JSON.parse(jsonStr)
console.log(jsobj2)