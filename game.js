const CHOICES = ["rock", "paper", "scissors"];
const WINNING_MATCHUPS = {
    "rock" : "scissors",
    "scissors" : "paper",
    "paper" : "rock"
}

let getComputerChoice = () => {
    // Generate random number between 0-2
    let rand = Math.floor(Math.random() * 3);
    return CHOICES[rand];
}

let play = () => {    
    let playerChoice = prompt("Enter your choice!").toLowerCase();
    while(!CHOICES.includes(playerChoice)) {
        playerChoice = prompt("Invalid choice, re-enter your choice!").toLowerCase();
    }

    let computerChoice = getComputerChoice();

    console.log(`Player Choice: ${playerChoice}`);
    console.log(`CPU Choice: ${computerChoice}`);
    console.log("");
    
    // Draw
    if(playerChoice === computerChoice) {
        return "draw";
    }
    else {
        // Check if the player won
        let win_matchup = WINNING_MATCHUPS[playerChoice];
        let playerWin = (win_matchup === computerChoice) 
            ? true
            : false;
        
        if(playerWin) {
            return "player";
        } 
        return "cpu";
    }
}

let game = () => {
    let roundCounter = 1;
    let playerScore = 0
    let computerScore = 0;

    let result = play();
    let alertMsg;
    if(result !== "draw") {
        if(result === "player") {
            alertMsg = `THE PLAYER WINS ROUND ${roundCounter}`
            playerScore++;
        } else {
            alertMsg = `THE COMPUTER WINS ROUND ${roundCounter}`
            computerScore++;
        }
    } else {
        alertMsg = `Round ${roundCounter} is a draw`
    }
    alert(alertMsg);
    roundCounter++;

    let gameCompleteMsg;
    if(playerScore > computerScore) {
        gameCompleteMsg = 
            "PLAYER WINS\n\n"
            + "Player Score: " + playerScore
            + "\nComputer Score: " + computerScore;
    } 
    else if(computerScore > playerScore) {
        gameCompleteMsg = 
            "COMPUTER WINS\n\n"
            + "Player Score: " + playerScore
            + "\nComputer Score: " + computerScore;
    }
    else {
        gameCompleteMsg = 
            "DRAW\n\n"
            + "Player Score: " + playerScore
            + "\nComputer Score: " + computerScore;
    }
    alert(gameCompleteMsg);
}

game();