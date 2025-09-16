console.log("Welcome to the Rock, Paper, Scissors Game!");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}