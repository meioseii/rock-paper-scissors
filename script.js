const computerChoice = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return computerChoice[Math.floor(Math.random(computerChoice.length - 1)*3)]
}

function startRound(playerChoice, computerSelection) {
    if (playerChoice === "Rock" && computerSelection === "Scissors")
        return "You win! Rock beats scissors!";
    else if (playerChoice === "Rock" && computerSelection === "Rock")
        return "Draw! You both choose rock!";
    else if (playerChoice === "Rock" && computerSelection === "Paper")
        return "You lose! Paper beats rock!";

    else if (playerChoice === "Paper" && computerSelection === "Rock")
        return "You win! Paper beats rock!";
    else if (playerChoice === "Paper" && computerSelection === "Paper")
        return "Draw! You both choose paper!";
    else if (playerChoice === "Paper" && computerSelection === "Scissors")
        return "You lose! Scissors beats paper!"
        
    else if (playerChoice === "Scissors" && computerSelection === "Paper")
        return "You win! Scissors beats paper!";
    else if (playerChoice === "Scissors" && computerSelection === "Scissors")
        return "Draw! You both choose scissors!";
    else if (playerChoice === "Scissors" && computerSelection === "Rock")
        return "You lose! Rock beats Scissors!"
}

const computerSelection = computerPlay()

console.log(startRound("Rock", computerSelection));