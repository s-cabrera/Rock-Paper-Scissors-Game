var choices = ["R", "P", "S"]; // The user choices
var choicesFull = ["Rock", "Paper", "Scissors"];
var wins = 0;
var loses = 0; 
var ties = 0;
var stillPlaying = true;

// var random = Math.floor(Math.random()* 10) % 3; // Generates an number between 0-2 {R will be 0, P is 1, S is 2}
// console.log(random);

function randomNum(){return Math.floor(Math.random()* 10) % 3;}

function play(){
   makeChoice();
}

function makeChoice(){
    const choice = prompt("Choose R, P, or S");    
    if(choice === "R"){
        alert("You chose Rock!");
        victory(choice);
    }
    else if(choice === "P"){
        alert("You chose Paper!");
        victory(choice);
    }
    else if(choice === "S"){
        alert("You chose Scissors!");
        victory(choice);
    }
    else{
        alert("You did not enter a valid input. Press Okay to try again");
    }
}

// R is 0; P is 1; S is 2;
function victory(choice){
    const random = randomNum();
    console.log(`User choice: ${choice}; Computer: ${choices[random]}`);
    if(choice === choices[random]){//If they match it's a tie
        alert(`You both chose ${choicesFull[random]} \r\n It's a tie!`);
        tie++;
    }
    else if(choice === "R"){//It's not a tie. Let's check if it's a win or a loss.
        if(choices[random] === "P"){//if computer picks paper, what happens?
            alert("You chose Rock! \r\n Computer chose Paper! \r\n It's a loss!");
            loses++;
        }
        else{//If the computer picks Scissors
            alert("You chose Rock! \r\n Computer chose Scissors! \r\n It's a win!");
            wins++;
        }
    }
    else if(choice === "P"){//Its not a tie.Let's check if it's a win or a loss.
        if(choices[random] === "R"){//if computer picks rock, what happens?
            alert("You chose Paper! \r\n Computer chose Rock! \r\n It's a win!");
            wins++;
        }
        else{//If the computer picks Scissors
            alert("You chose Paper! \r\n Computer chose Scissors! \r\n It's a loss!");
            loses++;
        }

    }
    else{
        if(choice === "S"){//Its not a tie.Let's check if it's a win or a loss.
            if(choices[random] === "P"){//if computer picks paper, what happens?
                alert("You chose Scissors! \r\n Computer chose Paper! \r\n It's a win!");
                wins++;
            }
            else{//If the computer picks Rock
                alert("You chose Scissors! \r\n Computer chose Rock! \r\n It's a loss!");
                loses++;
            }
        }
    }
    alertBox();
}

// alert("Rock beats Scissors!");
// alert("Scissors beats Paper!");
// alert("Paper beats Rock");
// alert("It's a tie!")

function alertBox(){
    alert(`Wins: ${wins} \r\n Loses: ${loses} \r\n Ties: ${ties} \r\n`);
    stillPlaying = confirm("Do you want to play again?");
}

while(stillPlaying){
    play();
}