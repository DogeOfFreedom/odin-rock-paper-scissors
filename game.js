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
    let playerScore, cpuScore = 0;

    while(roundCounter <= 5) {
        let result = play();
        let alertMSG;
        if(result !== "draw") {
            if(result === "player") {
                alertMSG = `THE PLAYER WINS ROUND ${roundCounter}`
            } else {
                alertMSG = `THE COMPUTER WINS ROUND ${roundCounter}`
            }
        } else {
            alertMSG = `Round ${roundCounter} is a draw`
        }
        alert(alertMSG);
        roundCounter++;
    }
}

game();