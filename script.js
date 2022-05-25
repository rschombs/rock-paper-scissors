let playerScore = 0;
let computerScore = 0;

function game() {
 
    while (playerScore + computerScore != 5) {
        playerSelection = playerChoose();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        alert(result);
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
let answer = prompt("Pick ROCK, PAPER, or SCISSORS");
    if (answer.toUpperCase() != "ROCK" && answer.toUpperCase() != "PAPER" && answer.toUpperCase() != "SCISSORS") {
        alert("Invalid entry. Please try again.");
        playerChoose();
    }
return answer.toUpperCase();

}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {

        let result;

        switch (computerSelection) {
            
            case "ROCK":
                return "A tie! You both picked ROCK.";
                break;
            
            case "PAPER":
                ++computerScore;
                return "You lose! PAPER beats ROCK.";
                break;

            case "SCISSORS":
                ++playerScore;
                return "You win! ROCK beats SCISSORS.";
                break;

        }


    }

    if (playerSelection == "PAPER") {

        let result;

        switch (computerSelection) {
            
            case "PAPER":
                return "A tie! You both picked PAPER.";
                break;
            
            case "SCISSORS":
                ++computerScore;
                return "You lose! SCISSORS beats PAPER.";
                break;

            case "ROCK":
                ++playerScore;
                return "You win! PAPER beats ROCK.";
                break;

        }


    }

    if (playerSelection == "SCISSORS") {

        let result;

        switch (computerSelection) {
            
            case "SCISSORS":
                return "A tie! You both picked SCISSORS.";
                break;
            
            case "ROCK":
                ++computerScore;
                return "You lose! ROCK beats SCISSORS.";
                break;

            case "PAPER":
                ++playerScore;
                return "You win! SCISSORS beats PAPER.";
                break;

        }

        return result;
        alert(result);


    }

}


function add(a,b) {
    b++;
    return (a + b);
}

function initiate(c) {
let b;
test(c);
alert(b);

}

function test(c) {
    let b = 10;
    alert(add(3,b) + c);
    
}