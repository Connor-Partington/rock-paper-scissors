let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = getComputerChoice();

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
        computerScore += 1;
        return "You Lose! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "It's a draw";
    }
}

function game() {
    for (i = 1; i < 6; i++) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        computerSelection = getComputerChoice();
        console.log("Round: " + i);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return "End of game. Player Wins!" + "\nPlayer score: " + playerScore + "\nComputer score: " + computerScore;
    } else if (playerScore < computerScore) {
        return "End of game. Player Loses!" + "\nPlayer score: " + playerScore + "\nComputer score: " + computerScore;
    } else {
        return "End of game. It's a draw" + "\nPlayer score: " + playerScore + "\nComputer score: " + computerScore;
    }
}

console.log(game());