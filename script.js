let userChoice;
let computerSelection;
let roundWinner;
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

const button = document.querySelector('body');

const rButton = document.createElement('button');
rButton.classList.add('rock');
rButton.textContent = "Rock";
button.appendChild(rButton);

const pButton = document.createElement('button');
pButton.classList.add('paper');
pButton.textContent = "Paper";
button.appendChild(pButton);

const sButton = document.createElement('button');
sButton.classList.add('scissors');
sButton.textContent = "Scissors";
button.appendChild(sButton);

const roundDiv = document.createElement('div');
roundDiv.classList.add('roundResults');
button.appendChild(roundDiv);

const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results');
button.appendChild(resultsDiv);

const playerDiv = document.createElement('div');
playerDiv.classList.add('playerResults');
button.appendChild(playerDiv);

const computerDiv = document.createElement('div');
computerDiv.classList.add('computerResults');
button.appendChild(computerDiv);

const finalDiv = document.createElement('div');
finalDiv.classList.add('finalResults');
button.appendChild(finalDiv);



function computerPlay() {
    //generate a random return of rock, paper, or scissors
    let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber == 0) {
            return "rock";
        } else if (randomNumber == 1) {
            return "paper";
        } else {
            return "scissors";
        }
}
    //store value of the players click in variable userChoice
    let rockBtn = document.querySelector('.rock');
     rockBtn.addEventListener('click', function(e) {
        userChoice = "rock";
        computerSelection = computerPlay();
        console.log(userChoice);
        console.log(computerSelection);
     });
     let paperBtn = document.querySelector('.paper');
     paperBtn.addEventListener('click', function(e) {
        userChoice = "paper";
        computerSelection = computerPlay();
     });
     let scissorsBtn = document.querySelector('.scissors');
     scissorsBtn.addEventListener('click', function(e) {
        userChoice = "scissors";
        computerSelection = computerPlay();
     });

function playRound() {
    //compare playerSelection input against computerSelection 
    //determine who wins the round
    if (userChoice === computerSelection) {
        roundWinner = "Draw! Try again."
    } else if (userChoice == "rock" && computerSelection == "paper") {
        roundWinner = "You lose! Paper beats rock."
    } else if (userChoice == "rock" && computerSelection == "scissors"){
        roundWinner = "You win! Rock beats scissors."
    } else if (userChoice == "paper" && computerSelection == "rock"){
        roundWinner = "You win! Paper beats rock."
    } else if (userChoice == "paper" && computerSelection == "scissors"){
        roundWinner = "You loose! Scissors beats paper."
    } else if (userChoice == "scissors" && computerSelection == "rock"){
        roundWinner = "You lose! Rock beats scissors."
    } else if (userChoice == "scissors" && computerSelection == "paper"){
        roundWinner = "You Win! Scissors beats paper."
    }
    resultsDiv.textContent = roundWinner;
}

function scoreTracker () {  
    //keep track of and display the rounds played, player score, computer score, and overall results
    playRound();
        if (roundWinner == "You win! Rock beats scissors." || roundWinner == "You win! Paper beats rock." || roundWinner == "You Win! Scissors beats paper.") {
            playerScore += 1;
            roundsPlayed += 1;
        } else if (roundWinner == "You lose! Paper beats rock." || roundWinner == "You loose! Scissors beats paper." || roundWinner == "You lose! Rock beats scissors.") {
            computerScore += 1;
            roundsPlayed += 1;
        } else {
            playerScore = playerScore;
            computerScore = computerScore;
            roundsPlayed += 1;
        }
        if (roundsPlayed == 5) {
            if (playerScore > computerScore) {
                finalDiv.textContent = "YOU WIN!!!";
            } else if (playerScore < computerScore) {
                finalDiv.textContent = "YOU LOSE!!!";
            } else {
                finalDiv.textContent = "DRAW!!! Try again.";
            }
        }
    roundDiv.textContent = "Round = " + roundsPlayed;
    playerDiv.textContent = "Player score = " + playerScore;
    computerDiv.textContent = "Computer score = " + computerScore;
}

//on users button click, run playRound function and scoreTracker function
const buttonChoice = document.querySelectorAll('button');
console.log(buttonChoice);
buttonChoice.forEach((button) => {
    button.addEventListener('click', playRound);
    button.addEventListener('click', scoreTracker);
}); 