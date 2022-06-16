const computerSelection = computerPlay();
const playerSelection = playerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"]
        computerChoices = computerChoices[Math.floor(Math.random()*computerChoices.length)]
            return computerChoices;
}
function playerPlay() {
    let playerChoices = prompt("Rock, paper, or scissors?");
        playerChoices = playerChoices.charAt(0).toUpperCase() + playerChoices.slice(1).toLowerCase();
            return playerChoices;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw!"
    }   else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++
            return "You win! Rock beats Scissors!"
    }   else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++
            return "You win! Scissors beats Paper!"
    }   else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++
            return "You win! Paper beats Rock!"
    }   else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++
            return "You lose! Paper beats Rock!"
    }   else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++
            return "You lose! Rock beats Scissors!"
    }   else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++
            return "You lose! Scissors beats Paper!"
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log(playerScore);
console.log(computerScore);