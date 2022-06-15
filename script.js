const computerSelection = computerPlay();
const playerSelection = playerPlay();

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

}

