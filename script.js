function computerPlay() {

    let selection = Math.floor(Math.random()*3);
    console.log(selection);
    if (selection == 0) {
        return "ROCK";
    } else if (selection == 1) {
        return "SCISSORS";
    } else return "PAPER"; 
}

