console.log("Hello, World!");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose 'rock', 'paper', or 'scissors':").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice
    } else {
        alert("Invalid choice!");
        return getHumanChoice();
    }
}

function playRound(roundNumber) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(`\n✨ Round #${roundNumber} Result ✨\n----------------------------\nYour choice: ${humanSelection}\nComputer choice: ${computerSelection}\n`);
    return roundWinner = getWinner(humanSelection, computerSelection);
}

function getWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (humanChoice === "rock"      && computerChoice === "scissors" ||
               humanChoice === "paper"     && computerChoice === "rock"     ||
               humanChoice === "scissors"  && computerChoice === "paper"    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame(roundsNumber) {
    let humanScore = 0;
    let computerScore = 0;
    
    for (i = 0; i < roundsNumber; i++) {
        let roundWinner = playRound(i+1);
        if (roundWinner === "human") {
            console.log("Round Winner: You! 🏆");
            humanScore += 1;
        } else if (roundWinner === "computer") {
            console.log("Round Winner: Computer 😢");
            computerScore += 1;
        } else {
            console.log("Round Winner: It's a tie! 🎉");
        }
        console.log(`\n🌎 Current Score 🌎\n-----------------------------\n👤 You: ${humanScore}  |  🤖 Computer: ${computerScore}\n`);
    }

    console.log(`\n🏁 Final Result 🏁\n-----------------------------\n`);
    if (humanScore > computerScore) {
        console.log(`\n🎉 YOU WIN! 🎉\n-----------------------------\n👤 You: ${humanScore}  |  🤖 Computer: ${computerScore}\n🌟 Congratulations, you're ahead! 🌟\n`);
    } else if (computerScore > humanScore) {
        cconsole.log(`\n😱 COMPUTER WINS! 😱\n-----------------------------\n👤 You: ${humanScore}  |  🤖 Computer: ${computerScore}\n💥 Better luck next time! 💥\n`);
    } else {
        console.log(`\n⚖️ IT'S A TIE! ⚖️\n-----------------------------\n👤 You: ${humanScore}  |  🤖 Computer: ${computerScore}\n🌀 It's a close match! Try again! 🌀\n`);
    }
}

playGame(5);

