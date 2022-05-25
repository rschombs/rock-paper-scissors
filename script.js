

function game() {
  
    let result;
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore + computerScore != 5) {
        playerSelection = playerChoose();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore++;
        }

        else if (result == -1) {

            computerScore++;

        }
        alert("The score is: YOU " + playerScore + ", COMPUTER " + computerScore);

    }

    if (playerScore > computerScore) {

        alert("You win " + playerScore + " to " + computerScore);
    }

    else {

        alert("The computer wins " + computerScore + " to " + playerScore);

    }
    
}

function computerPlay() {

    let selection = Math.floor(Math.random()*3);
    if (selection == 0) {
        return "ROCK";
    } else if (selection == 1) {
        return "SCISSORS";
    } else return "PAPER"; 
}
function playerChoose() {
    let answer = "start";
    while (true) {
        answer = prompt("Pick ROCK, PAPER, or SCISSORS");
        if (answer.toUpperCase() == "ROCK" || answer.toUpperCase() == "PAPER" || answer.toUpperCase() == "SCISSORS") {
            return answer.toUpperCase();
        }
        else { 
        alert("Invalid entry. Please try again."); 
        }    
    }
    }


function playRound (playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {

        switch (computerSelection) {
            
            case "ROCK":
                alert("A tie! You both picked ROCK.")
                return 0;
                break;
            
            case "PAPER":
                alert("You lose! PAPER beats ROCK.");
                return -1;
                break;

            case "SCISSORS":
                alert("You win! ROCK beats SCISSORS.");
                return 1;
                break;

        }


    }

    if (playerSelection == "PAPER") {

        switch (computerSelection) {
            
            case "PAPER":
                alert("A tie! You both picked PAPER.");
                return 0;
                break;
            
            case "SCISSORS":
                alert("You lose! SCISSORS beats PAPER.");
                return -1;
                break;

            case "ROCK":
                alert("You win! PAPER beats ROCK.");
                return 1;
                break;

        }


    }

    if (playerSelection == "SCISSORS") {

        switch (computerSelection) {
            
            case "SCISSORS":
                alert ("A tie! You both picked SCISSORS.");
                return 0;
                break;
            
            case "ROCK":
                alert("You lose! ROCK beats SCISSORS.");
                return -1;
                break;

            case "PAPER":
                alert("You win! SCISSORS beats PAPER.");
                return 1;
                break;

        }

    }

}


function test() {

    let a = 1;

    while (a != 5) {
    increment(a);
    console.log(a);
}
}

function increment(a) {

    a++;
    console.log(a);
}