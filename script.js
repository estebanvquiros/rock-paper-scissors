console.log("Welcome to the Rock, Paper, Scissors Game!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

function getHumanChoice() {
    return prompt("Make your choice:\n\nRock\nPaper\nScissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You: ${humanChoice} | Computer: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! ${humanChoice} vs ${computerChoice}`);
        return "tie";
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose... ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}