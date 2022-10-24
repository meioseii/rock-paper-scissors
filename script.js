let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock') 
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')

const player = document.querySelector('.playerScore')
player.textContent = `Player Score: ${playerScore}`
const computer = document.querySelector('.computerScore')
computer.textContent = `Computer Score: ${computerScore}`

const disable = document.querySelectorAll('button')

const p = document.querySelector('.outcome')
p.textContent = "Choose your weapon!"

const container = document.querySelector('.restart')
const restartBtn = document.createElement('button');
restartBtn.classList.add('restartBtn')
restartBtn.textContent = "PLAY AGAIN"


restartBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        player.textContent = "Player Score: 0"
        computer.textContent = "Computer Score: 0"
        container.removeChild(restartBtn)
        disableBtnsFalse()
        p.textContent = "Choose your weapon!"
})

function disableBtnsFalse() {
        disable.forEach(elem => {
                elem.disabled = false
        })
}

function disableBtns() {
        disable.forEach(elem => {
                elem.disabled = true
        })
}


function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"]
        computerChoices = computerChoices[Math.floor(Math.random()*computerChoices.length)]
            return computerChoices;
}
/* function playerPlay() {
    let playerChoices = prompt("Rock, Paper, or Scissors?");
        playerChoices = playerChoices.charAt(0).toUpperCase() + playerChoices.slice(1).toLowerCase();
        return playerChoices;
} */

function playRound(playerSelection, computerSelection) {

        /* playerSelection = playerPlay();
        computerSelection = computerPlay(); */

    if (playerSelection === computerSelection) {
        p.innerText = `Draw! You both picked ${playerSelection}! `
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        p.innerText = "You win! Rock beats Scissors!"
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        p.innerText = "You win! Scissors beats Paper!"
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        p.innerText = "You win! Paper beats Rock!"
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        p.innerText = "You lose! Paper beats Rock!"
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        p.innerText = "You lose! Rock beats Scissors!"
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        p.innerText = "You lose! Scissors beats Paper!"
    }
}

const winner = (playerScore, computerScore) => {
        if (playerScore === 5) {
                p.innerText = `You won against the computer! ${playerScore} to ${computerScore}`
                disableBtns()
                container.appendChild(restartBtn)
        }
        if (computerScore === 5) {
                p.innerText = `You lost to a computer! ${playerScore} to ${computerScore}`
                disableBtns()
                container.appendChild(restartBtn)
        }
}


rockBtn.addEventListener('click', () => {
        const computerSelection = computerPlay()
        const playerSelection = 'Rock'
        playRound(playerSelection, computerSelection)
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`
        winner(playerScore, computerScore)
})

paperBtn.addEventListener('click', () => {
        const computerSelection = computerPlay()
        const playerSelection = 'Paper'
        playRound(playerSelection, computerSelection)
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`
        winner(playerScore, computerScore)
})

scissorsBtn.addEventListener('click', () => {
        const computerSelection = computerPlay()
        const playerSelection = 'Scissors'
        playRound(playerSelection, computerSelection)
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`
        winner(playerScore, computerScore)
})

/* function game() {
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
 */



