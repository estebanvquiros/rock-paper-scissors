console.log("Welcome to the Rock Paper Scissors Game!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice:\n ROCK | PAPER | SCISSORS").toUpperCase();
    return choice;
}

function playRound(computerChoice, humanChoice) {
    if (
        computerChoice === "PAPER" && humanChoice === "ROCK" ||
        computerChoice === "SCISSORS" && humanChoice === "PAPER" ||
        computerChoice === "ROCK" && humanChoice === "SCISSORS"
    ) {
        computerScore += 1;
        console.log("You lose!");
        console.log(`${computerChoice} beats ${humanChoice}`);
    } else if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        console.log(`${computerChoice} vs ${humanChoice}`);
    } else {
        humanScore += 1;
        console.log("You win!")
        console.log(`${humanChoice} beats ${computerChoice}`);
    }
}