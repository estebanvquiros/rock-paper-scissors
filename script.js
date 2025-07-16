console.log("Welcome to the Rock Paper Scissors Game!");

const OPTIONS = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());
