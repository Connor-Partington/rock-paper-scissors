// Create an array with each choice. Pick a random choice from the array and return the choice. 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// Check if player and computer choices match to a losing, winning or draw pair. 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "It's a draw";
    }
}

let playerSelection = "";
let computerSelection = getComputerChoice();

function game() {
    for (i = 1; i < 6; i++) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        computerSelection = getComputerChoice();
        console.log(i);
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());