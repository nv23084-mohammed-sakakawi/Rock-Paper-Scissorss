function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    } else {
        computerScore++;
        return `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    }
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const buttons = document.querySelectorAll('.buttons button');
const resultsDiv = document.querySelector('.results');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const winnerDiv = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        resultsDiv.textContent = roundResult;
        playerScoreSpan.textContent = playerScore.toString();
        computerScoreSpan.textContent = computerScore.toString();
        console.log(roundResult); // Keep console.logs for now

        if (playerScore === 5) {
            winnerDiv.textContent = "You won the game!";
            disableButtons();
        } else if (computerScore === 5) {
            winnerDiv.textContent = "Computer won the game!";
            disableButtons();
        }
    });
});

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}
