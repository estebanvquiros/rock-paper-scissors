const MAX_ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const humanGlobalScore = document.querySelector("#human-score");
const computerGlobalScore = document.querySelector("#computer-score");
humanGlobalScore.textContent = "0";
computerGlobalScore.textContent = "0";

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*3)];
}

const humanChoiceResult = document.querySelector("#human-choice");
const computerChoiceResult = document.querySelector("#computer-choice");
const roundWinnerOutput = document.querySelector("#round-winner-output");

roundWinnerOutput.textContent = "Let’s play! Best of five!";
humanChoiceResult.textContent = "You: ?";
computerChoiceResult.textContent = "Computer: ?";


function playRound(humanChoice, computerChoice) {
    humanChoiceResult.textContent = `You: ${humanChoice}`;
    computerChoiceResult.textContent = `Computer: ${computerChoice}`;
    if (humanChoice === computerChoice) {
        roundWinnerOutput.textContent = `It's a tie! ${humanChoice} vs ${computerChoice}`;
        return "tie";
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock"
    ) {
        roundWinnerOutput.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return "human";
    } else {
        roundWinnerOutput.textContent = `You lose... ${computerChoice} beats ${humanChoice}`;
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