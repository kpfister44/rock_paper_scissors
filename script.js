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
    
function userPlay() {
         //prompt player to input either rock, paper, or scissors 
            userChoice = prompt("Rock, paper, or scissors?")
            //evaluate userChoice an return an appropriate string to be used in playRound and game functions 
            userChoice = userChoice.toLowerCase();
            switch (userChoice) {
                case "rock":
                    return "rock";
                    break;
    
                case "paper":
                    return "paper";
                    break;
    
                case "scissors":
                    return "scissors";
                    break;
    
                default:
                    alert("Not a valid choice!!!");
            }
        }  

function playRound(playerSelection, computerSelection) {
        //compare userPlay input against computerSelection 
        //determine who wins the round and print the return value in the console
    
        if (playerSelection === computerSelection) {
            return "Draw! Try again."
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            return "You lose! Paper beats rock."
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            return "You win! Rock beats scissors."
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            return "You win! Paper beats rock."
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            return "You loose! Scissors beats paper."
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            return "You lose! Rock beats scissors."
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            return "You Win! Scissors beats paper."
        }
    }
    
function game() {
//call playRound function 5 times and console.log the the total socre, results, and winner of the five rounds
    let totalScore = 0;  
    for (let i = 0; i < 5; i++) {
        let playerSelection = userPlay();
        let computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
            if (roundResult == "You win! Rock beats scissors." || roundResult == "You win! Paper beats rock." || roundResult == "You Win! Scissors beats paper.") {
                totalScore += 1;
                console.log(roundResult);
            } else if (roundResult == "You lose! Paper beats rock." || roundResult == "You loose! Scissors beats paper." || roundResult == "You lose! Rock beats scissors.") {
                totalScore -= 1;
                console.log(roundResult);  
            } else {
                totalScore = totalScore;
                console.log("Draw!");
            }
        console.log("Final score = " + totalScore);
        }

    if (totalScore > 0) {
        console.log("Congratulations, you won the match!");
    } else if (totalScore < 0) {
        console.log("Sorry, you lost the match!");
    } else {
        console.log("You tied!!!");
    }
}