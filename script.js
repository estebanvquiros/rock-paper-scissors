console.log("Welcome to the Rock Paper Scissors Game!");

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
    let choice = prompt("Enter your choice:\n\n ROCK | PAPER | SCISSORS").toUpperCase();
    return choice;
}

function playRound(computerChoice, humanChoice) {
    if (
        computerChoice === "PAPER" && humanChoice === "ROCK" ||
        computerChoice === "SCISSORS" && humanChoice === "PAPER" ||
        computerChoice === "ROCK" && humanChoice === "SCISSORS"
    ) {
        console.log("You lose!");
        console.log(`${computerChoice} beats ${humanChoice}`);
        return "COMPUTER";
    } else if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        console.log(`${computerChoice} vs ${humanChoice}`);
        return "TIE";
    } else {
        console.log("You win!")
        console.log(`${humanChoice} beats ${computerChoice}`);
        return "HUMAN";
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        let winner = playRound(computerSelection, humanSelection);

        if (winner !== "TIE") {
            winner === "COMPUTER" ? computerScore++ : humanScore++;
        }
    }

    console.log("Final Score -----------------------------------------------");
    console.log(`Computer Score ${computerScore} | ${humanScore} Human Score`);

    // Declare the winner
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 The computer won the game.");
    } else {
        console.log("🤝 It's a tie!");
    }

}

playGame();