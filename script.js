console.log("Welcome to the Rock, Paper, Scissors Game!");

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(` ------- Round ${i+1} ------- `);
        let winner = playRound(getHumanChoice(), getComputerChoice());
        if (winner === "human") humanScore++;
        else if (winner === "computer") computerScore++;
    }

    console.log(" ----- Final Score ----- ")
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) console.log("You win! 🎉");
    else if (humanScore < computerScore) console.log("You lose ☹️")
    else console.log("It's a tie! 😎")
}

playGame();