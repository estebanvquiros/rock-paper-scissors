console.log("Hello, World!");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
}

console.log(getComputerChoice());
