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
const infoOutput = document.querySelector("#info-output");

infoOutput.textContent = "Let’s play! Round 1 of 5";
humanChoiceResult.textContent = "?";
computerChoiceResult.textContent = "?";


function playRound(humanChoice, computerChoice) {
    humanChoiceResult.textContent = humanChoice;
    computerChoiceResult.textContent = computerChoice;
    if (humanChoice === computerChoice) {
        infoOutput.textContent = `It's a tie! ${humanChoice} vs ${computerChoice}`;
        return "tie";
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock"
    ) {
        infoOutput.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return "human";
    } else {
        infoOutput.textContent = `You lose... ${computerChoice} beats ${humanChoice}`;
        return "computer";
    }
}


const controls = document.querySelector(".controls");
controls.addEventListener("click", (event) => {

    if (roundsPlayed >= 5) {
        return;
    }

    const selected = event.target.id;
    let winner;
    switch (selected) {
        case 'rock':
            winner = playRound('Rock', getComputerChoice());
            break;
        case 'paper':
            winner = playRound('Paper', getComputerChoice());
            break;
        case 'scissors':
            winner = playRound('Scissors', getComputerChoice());
            break;
    }

    if (winner === "human") humanScore++;
    else if (winner === "computer") computerScore++;

    humanGlobalScore.textContent = humanScore.toString();
    computerGlobalScore.textContent = computerScore.toString();

    roundsPlayed++;

    if (roundsPlayed >= MAX_ROUNDS) {
        declareWinner(humanScore, computerScore);
    }
})

function declareWinner (humanScore, computerScore) {
    if (humanScore > computerScore) infoOutput.textContent = "The battle is over… and victory is yours! 🏆";
    else if (humanScore < computerScore) infoOutput.textContent = "You gave it your all… but the game is lost. 🥀";
    else infoOutput.textContent = "A clash of equals — it’s a tie! ⚔️";
}