
function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random(computerChoice.length - 1)*3)]
}

function startRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors")
        return "You win! Rock beats scissors!";
    else if (playerSelection === "Rock" && computerSelection === "Rock")
        return "Draw! You both choose rock!";
    else if (playerSelection === "Rock" && computerSelection === "Paper")
        return "You lose! Paper beats rock!";

    else if (playerSelection === "Paper" && computerSelection === "Rock")
        return "You win! Paper beats rock!";
    else if (playerSelection === "Paper" && computerSelection === "Paper")
        return "Draw! You both choose paper!";
    else if (playerSelection === "Paper" && computerSelection === "Scissors")
        return "You lose! Scissors beats paper!"
        
    else if (playerSelection === "Scissors" && computerSelection === "Paper")
        return "You win! Scissors beats paper!";
    else if (playerSelection === "Scissors" && computerSelection === "Scissors")
        return "Draw! You both choose scissors!";
    else if (playerSelection === "Scissors" && computerSelection === "Rock")
        return "You lose! Rock beats Scissors!"
}

const computerSelection = computerPlay()


console.log(startRound("Rock",computerSelection));