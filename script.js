// Create an array with each choice. Pick a random choice from the array and return the choice. 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// Check if player and computer choices match to a losing, winning or draw pair. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win!";
    } else {
        return "It's a draw";
    }
}

// Ask player for their choice. 
const playerSelection = prompt("What's your choice?", "Rock, Paper, Scissors")
const computerSelection = getComputerChoice();

// Print outcome in console. 
console.log(playRound(playerSelection, computerSelection));

function game() {

}