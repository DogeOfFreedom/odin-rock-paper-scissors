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
    let computerChoice = getComputerChoice();
    
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