function getComputerChoice(): string {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection: string, computerSelection: string): string {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else {
    return `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
  }
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// DOM elements (will be initialized when the UI is added)
const buttons = document.querySelectorAll<HTMLButtonElement>('.buttons button');
const resultsDiv = document.querySelector<HTMLDivElement>('.results')!;
const playerScoreSpan = document.querySelector<HTMLSpanElement>('#playerScore')!;
const computerScoreSpan = document.querySelector<HTMLSpanElement>('#computerScore')!;
const winnerDiv = document.querySelector<HTMLDivElement>('.winner')!;

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice!;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);
    resultsDiv.textContent = roundResult;
    playerScoreSpan.textContent = playerScore.toString();
    computerScoreSpan.textContent = computerScore.toString();

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

// The game() function for text-based interaction is removed
// as the UI will handle the game flow.
