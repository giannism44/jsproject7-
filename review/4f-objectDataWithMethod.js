const user = {
  firstsname: "George",
  lastname: "Papado",
  getFirstname: function(){
    return this.firstsname
  },

  getFullname() {
    return `${this.firstsname}, ${this.lastname}`
  }
}


console.log(user.getFirstname())
console.log(user.getFullname())