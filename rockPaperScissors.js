const alternatives = ["rock", "paper", "scissors"];
let playerChoice;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
            
function playRound(choice){
    choice = prompt("Type your choice: \n"+
    "Rock, Paper or Scissors").toUpperCase();

    let computerSelection=getComputerChoice();

    if(choice!=="ROCK"&&choice!=="PAPER"&&choice!=="SCISSORS"){
        return alert("Not a valid choice! Thats an end game :(");
    }
    switch(choice){
        case "ROCK":
            if(computerSelection==1){
                return console.log("Machine: "+alternatives[computerSelection]+"\n"
                                +"Player: "+alternatives[0]+"\n"
                                +"You have lost the game :(\n");
            }
            if(computerSelection==2){
                return console.log("Machine: "+alternatives[computerSelection]+"\n"
                                +"Player: "+alternatives[0]+"\n"
                                +"You have win the game :D\n");
            }
        case "PAPER":
            if(computerSelection==2){
                return console.log("Machine: "+alternatives[computerSelection]+"\n"
                                +"Player: "+alternatives[1]+"\n"
                                +"You have lost the game :(\n");
            }
            if(computerSelection==0){
                return console.log("Machine: "+alternatives[computerSelection]+"\n"
                                +"Player: "+alternatives[1]+"\n"
                                +"You have win the game :D\n");
            }
        case "SCISSORS":
            if(computerSelection==0){
                return console.log("Machine: "+alternatives[computerSelection]+"\n"
                                +"Player: "+alternatives[2]+"\n"
                                +"You have lost the game :(\n");
            }
            if(computerSelection==1){
                return console.log("Machine: "+alternatives[computerSelection]+"\n"
                                +"Player: "+alternatives[2]+"\n"
                                +"You have win the game :D\n");
            }
    }
}

function game(){
    for (let i = 0; i <= 4; i++) {
        console.log("Lets play more 5 times :D\n");
        console.log((i+1)+"º time\n")
        playRound(playerChoice);
    }
}

playRound(playerChoice);
game();
