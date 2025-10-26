function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);
    let compChoice;
    switch (compNum) {
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissor";
            break;
    }
    return compChoice;
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper or Scissor?");
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //Rock
    if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win, Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose, Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("Tie");
    }

    //Paper
    if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You lose, Scissors beats Paper.");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie");
    }
    else if (humanChoice === "paper" && computerChoice === "rock")  {
        console.log("You win, Paper beats Rock");
        humanScore++;
    }

    //Scissor
    if (humanChoice === "scissor" && computerChoice === "scissor") {
        console.log("Tie");
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win, Scissor beats Paper");
        humanScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock")  {
        console.log("You lose, Rock beats Scissor");
        computerScore++;
    }
}

function playGame() {
    for (let i=0; i<5; i++) {
        let humanChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

let humanScore = computerScore = 0;

playGame();