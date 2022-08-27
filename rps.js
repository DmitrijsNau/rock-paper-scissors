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

let choice = getComputerChoice()
function playRound(playerSelection,choice) {
    if (playerSelection === "rock" && choice === "paper") {
        console.log("You lose! Paper beats rock.")
    } else if (playerSelection === "scissors" && choice === "paper") {
        console.log("You win! Scissors beats paper.")
    } else if (playerSelection === "rock" && choice === "scissors") {
        console.log("You win! Rock beats scissors.")
    } else if (playerSelection === "paper" && choice === "scissors") {
        console.log("You lost! Scissors beats paper.")
    } else if (playerSelection === "scissors" && choice === "rock") {
console.log("You lost! Rock beats scissors.")
    } else if (playerSelection === "paper" && choice === "rock") {
        console.log("You win! Paper beats rock.")
    } else {
        console.log("It's a tie!")
    }
} 
for (let i = 0; i < 5; i++) {
    let playerSelection = (prompt("Please pick rock, paper, or scissors"))
    playRound(playerSelection,choice)

}