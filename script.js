const playerSelection = playerPlay()
const computerSelection = computerPlay()

function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}

function playerPlay() {
    let playerSelect = prompt("Rock, paper, or scissors?")
    playerSelect = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1).toLowerCase();
}

function startRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors")
        return "You win! Rock beats Scissors!";
    else if (playerSelection === "Rock" && computerSelection === "Rock")
        return "Draw! You both choose Rock!";
    else if (playerSelection === "Rock" && computerSelection === "Paper")
        return "You lose! Paper beats Rock!";

    else if (playerSelection === "Paper" && computerSelection === "Rock")
        return "You win! Paper beats Rock!";
    else if (playerSelection === "Paper" && computerSelection === "Paper")
        return "Draw! You both choose Paper!";
    else if (playerSelection === "Paper" && computerSelection === "Scissors")
        return "You lose! Scissors beats Paper!"
        
    else if (playerSelection === "Scissors" && computerSelection === "Paper")
        return "You win! Scissors beats Paper!";
    else if (playerSelection === "Scissors" && computerSelection === "Scissors")
        return "Draw! You both choose Scissors!";
    else if (playerSelection === "Scissors" && computerSelection === "Rock")
        return "You lose! Rock beats Scissors!"
}

function game() {
    startRound();
}

console.log(startRound(playerSelection, computerSelection));

