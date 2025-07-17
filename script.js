console.log("Welcome to the Rock Paper Scissors Game!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice:\n 1) ROCK | 2) PAPER | 3) SCISSORS");
    return OPTIONS[choice - 1];
}