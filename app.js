let playerScore = 0;
let compScore = 0;

while (playerScore != 5 || compScore != 5) {
    game()
    if (playerScore === 5) {
        console.log("Player has won!")
        break;
    } else if (compScore === 5) {
        console.log("Computer has won!")
        break;
    }
}
function game() {
    const playerSelection = prompt("What are you going to play?").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

function computerPlay() {
    let computerMoves = ['rock', 'paper', 'scissors'];
    computerMove = computerMoves[Math.floor(Math.random() * computerMoves.length)];
    return computerMove;
}

function playRound(playerSelection, computerSelection) {
    while (playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper") {
        playerSelection = prompt("Please, enter a valid option!").toLowerCase();
    } 
        if (playerSelection === computerSelection) {
        return "TIE!";
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            compScore++;
            return `You lost! Paper beats Rock! It has ${compScore} points`;

        } else {
            playerScore++;
            return `You won! Rock beats Scissors! You have ${playerScore} points`;
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            compScore++;
            return `You lost! Rock beats Scissors! It has ${compScore} points`;
        } else {
            playerScore++;
            return `You won! Scissors beats Paper! You have ${playerScore} points`;
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            compScore++;
            return `You lost! Scissors beats Paper! It has ${compScore} points`;
        } else {
            playerScore++;
            return `You won! Paper beats Rock! You have ${playerScore} points`;
        }
    }
}








