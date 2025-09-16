console.log("Welcome to the Rock, Paper, Scissors Game!");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

function getHumanChoice() {
    return prompt("Make your choice:\n\nRock\nPaper\nScissors");
}