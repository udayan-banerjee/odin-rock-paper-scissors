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

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5)
        return;
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //Rock
    if (humanChoice === "rock" && computerChoice === "scissor") {
        result.textContent = "You win, Rock beats Scissors";
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose, Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "rock"){
        result.textContent = "Tie";
    }

    //Paper
    if (humanChoice === "paper" && computerChoice === "scissor") {
        result.textContent = "You lose, Scissors beats Paper.";
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        result.textContent = "Tie";
    }
    else if (humanChoice === "paper" && computerChoice === "rock")  {
        result.textContent = "You win, Paper beats Rock";
        humanScore++;
    }

    //Scissor
    if (humanChoice === "scissor" && computerChoice === "scissor") {
        result.textContent = "Tie";
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        result.textContent = "You win, Scissor beats Paper";
        humanScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock")  {
        result.textContent = "You lose, Rock beats Scissor";
        computerScore++;
    }
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    score.innerHTML = `Human Score = ${humanScore}<br>
    Computer Score = ${computerScore}`;

    if (humanScore === 5)
        alert("You Won!!");
    else if (computerScore === 5)
        alert("LOOOOOSSSSEEERRRRRR");
}

let humanScore = computerScore = 0;
let score = document.querySelector("#score");
let result = document.querySelector("#result")
let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent, getComputerChoice());
    })
})