let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const humanGlobalScore = document.querySelector("#humanScore");
const computerGlobalScore = document.querySelector("#computerScore");

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*3)];
}

const humanChoiceOutput = document.querySelector("#humanChoice");
const computerChoiceOutput = document.querySelector("#computerChoice");
const infoOutput = document.querySelector("#gameInfo");

function displayChoices(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "Rock":
            humanChoiceOutput.textContent = '✊';
            break;
        case "Paper":
            humanChoiceOutput.textContent = '✋';
            break;
        case "Scissors":
            humanChoiceOutput.textContent = '✌️';
            break;
        default:
            humanChoiceOutput.textContent = '❔';
    }
    switch (computerChoice) {
        case "Rock":
            computerChoiceOutput.textContent = '✊';
            break;
        case "Paper":
            computerChoiceOutput.textContent = '✋';
            break;
        case "Scissors":
            computerChoiceOutput.textContent = '✌️';
            break;
        default:
            computerChoiceOutput.textContent = '❔';
    }
}

function playRound(humanChoice, computerChoice) {
    displayChoices(humanChoice, computerChoice);
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

    const selected = event.target.id;
    let winner;
    switch (selected) {
        case 'Rock':
            winner = playRound('Rock', getComputerChoice());
            break;
        case 'Paper':
            winner = playRound('Paper', getComputerChoice());
            break;
        case 'Scissors':
            winner = playRound('Scissors', getComputerChoice());
            break;
    }

    if (winner === "human") humanScore++;
    else if (winner === "computer") computerScore++;

    humanGlobalScore.textContent = `You: ${humanScore}`;
    computerGlobalScore.textContent = `Computer: ${computerScore}`;

    roundsPlayed++;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner(humanScore, computerScore);
        return;
    }
})

function declareWinner (humanScore, computerScore) {
    if (humanScore > computerScore) infoOutput.textContent = "The battle is over… and victory is yours! 🏆";
    else infoOutput.textContent = "You gave it your all… but the game is lost. 🥀";
}