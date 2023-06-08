// Global
const choices = Array("rock", "paper", "scissors");
let results = 0;

function getPlayerChoice(){
    let p_move = prompt("Enter a move");

    // Check that input isn't empty.
    if (p_move.length == 0){
        throw console.log("Input can't be empty"); // Terminates script. Refresh page to re-run.
    }

    // Convert it to lower case.
    p_move = p_move.toLowerCase();

    // Check that it is RPS.
    if (choices.includes(p_move)){
        playRound(p_move, getComputerChoice());
    }
    else{
        throw console.log("Invalid input.");
    }
}

function getComputerChoice(){
    // Retrieves a random index of the list.
    var randomIndex = Math.floor(Math.random() * choices.length);

    // Use that index to retrieve a random choice
    return choices[randomIndex];
}

function playRound(p_move, c_move){
    console.log("You chose:", p_move);
    console.log("Computer chose:", c_move);
    if (p_move === "rock"){
        if (c_move === "rock"){
            console.log("Tie!");
        }
        else if (c_move === "paper"){
            console.log("You lose :(");
        }
        else if (c_move === "scissors"){
            console.log("You win :)");
            results += 1;
        }
    }

    else if (p_move === "paper"){
        if (c_move === "paper"){
            console.log("Tie!");
        }
        else if (c_move === "scissors"){
            console.log("You lose :(");
        }
        else if (c_move === "rock"){
            console.log("You win :)");
            results += 1;
        }
    }

    else if (p_move === "scissors"){
        if (c_move === "scissors"){
            console.log("Tie!");
        }
        else if (c_move === "rock"){
            console.log("You lose :(");
        }
        else if (c_move === "paper"){
            console.log("You win :)");
            results += 1;
        }
    }
}

function main(){
    // Plays the game 5 times.
    // for (let i = 0; i < 5; i++){
    //     getPlayerChoice();
    // }
    console.log("You had", results, "wins.");
}

main();