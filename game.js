let choices = ["rock", "paper", "scissors"];

let getComputerChoice = () => {
    // Generate random number between 0-2
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}