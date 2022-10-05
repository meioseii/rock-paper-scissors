
function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"]
        computerChoices = computerChoices[Math.floor(Math.random()*computerChoices.length)]
            return computerChoices;
}
function playerPlay() {
    let playerChoices = prompt("Rock, Paper, or Scissors?");
        playerChoices = playerChoices.charAt(0).toUpperCase() + playerChoices.slice(1).toLowerCase();
        return playerChoices;
}
function playRound(playerSelection, computerSelection) {

        playerSelection = playerPlay();
        computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return "Draw!"
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You win! Rock beats Scissors!"
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return "You win! Scissors beats Paper!"
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You win! Paper beats Rock!"
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
            return "You lose! Paper beats Rock!"
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return "You lose! Rock beats Scissors!"
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper!"
    }
}
function game() {
        let playerScore = 0;
        let computerScore = 0;
        let drawLog = 0;

        for (let i = 0; i < 5; i++) {
                let result = playRound();
                
                if (result === "Draw!") {
                        drawLog++
                } else if (result === "You win! Rock beats Scissors!") {
                        playerScore++
                } else if (result === "You win! Scissors beats Paper!") {
                        playerScore++
                } else if (result === "You win! Paper beats Rock!") {
                        playerScore++
                } else if (result === "You lose! Paper beats Rock!") {
                        computerScore++
                } else if (result === "You lose! Rock beats Scissors!") {
                        computerScore++
                } else if (result === "You lose! Scissors beats Paper!") {
                        computerScore++
                }  
                console.log(result);
                console.log("Player: " + playerScore);
                console.log("Computer: " + computerScore);
        }
        if (playerScore === computerScore) {
                console.log(`Game Over! IT'S A TIE! ${playerScore}:${computerScore}`)
        } else if (playerScore > computerScore) {
                console.log(`Game Over! YOU WIN AGAINST THE COMPUTER! ${playerScore}:${computerScore}`)
        } else if (playerScore < computerScore) {
                console.log(`Game Over! YOU LOSE TO A COMPUTER! ${playerScore}:${computerScore}`)
        }
}




