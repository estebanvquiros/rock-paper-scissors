console.log("Welcome to the Rock Paper Scissors Game!");

const OPTIONS = ["ROCK", "PAPER", "SCISSORS"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice:\n 1) ROCK | 2) PAPER | 3) SCISSORS");
    return OPTIONS[choice - 1];
}