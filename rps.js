function getComputerChoice() {
   let rng = Math.floor(Math.random()*3)
   if (rng === 0) {
     let choice = "rock"
     return choice
   } else if (rng === 1) {
    let choice = "paper"
    return choice
   } else {
    let choice = "scissors"
    return choice
   }
   
}
console.log(getComputerChoice())