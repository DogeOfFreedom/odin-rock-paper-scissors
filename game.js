const CHOICES = ["rock", "paper", "scissors"];
const WINNING_MATCHUPS = {
    "rock" : "scissors",
    "scissors" : "paper",
    "paper" : "rock"
}
const playerChoiceElement = document.querySelector("#player-choice");
const computerChoiceElement = document.querySelector("#computer-choice");
const roundOutcomeElement = document.querySelector("#round-outcome");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    // Generate random number between 0-2
    let rand = Math.floor(Math.random() * 3);
    return CHOICES[rand];
}

let play = (playerChoice) => {    
    let computerChoice = getComputerChoice();
    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;

    let outcomeMsg;
    // Draw
    if(playerChoice === computerChoice) {
        outcomeMsg = "DRAW";
    }
    else {
        // Check if the player won
        let win_matchup = WINNING_MATCHUPS[playerChoice];
        let playerWin = (win_matchup === computerChoice) 
            ? true
            : false;
        outcomeMsg = playerWin 
            ? "PLAYER WINS THIS ROUND"
            : "COMPUTER WINS THIS ROUND";
        updateScoreboard(playerWin);
        checkScore();
    }
    roundOutcomeElement.textContent = outcomeMsg;
}

let checkScore = () => {
    if(playerScore == 5) {
        alert("PLAYER WINS");
    }
    else if(computerScore == 5) {
        alert("COMPUTER WINS");
    }
}

let updateScoreboard = (playerWin) => {
    if(playerWin) {
        playerScore++;
    }
    else {
        computerScore++;
    }
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

const choiceBtns = Array.from(document.getElementsByTagName("button"));
choiceBtns.forEach(button => {
    button.addEventListener("click", () => {
        play(button.value);
    });
})
