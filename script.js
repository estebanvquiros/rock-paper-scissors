
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

const userChoiceResult = document.querySelector("#user-choice");
const computerChoiceResult = document.querySelector("#computer-choice");
const roundWinnerOutput = document.querySelector("#round-winner-output");

function playRound(humanChoice, computerChoice) {
    userChoiceResult.textContent = `You: ${humanChoice}`;
    computerChoiceResult.textContent = `Computer: ${computerChoice}`;
    if (humanChoice === computerChoice) {
        roundWinnerOutput.textContent = "It's a tie!";
        return "tie";
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        roundWinnerOutput.textContent = "You win!";
        return "human";
    } else {
        roundWinnerOutput.textContent = "You lose...";
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