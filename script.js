console.log("Hello, World!");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Please choose 'rock', 'paper', or 'scissors':").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice
    } else {
        alert("Invalid choice!");
        return getHumanChoice();
    }
}

console.log(getHumanChoice());
