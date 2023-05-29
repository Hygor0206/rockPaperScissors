const alternatives = ["ROCK", "PAPER", "SCISSORS"],
      machineChoice = document.querySelector('#machine-choice'),  
      playerChoice = document.querySelector('#player-choice'),
      result = document.querySelector('#result'),
      buttons = document.querySelectorAll('.btn'),
      playerScore = document.querySelector('#player-score'),
      machineScore = document.querySelector('#machine-score'),
      restart = document.querySelector('#restart');
let inputChoice, pScore=0, mScore=0;
restart.style.display="none";

buttons.forEach(button => {
    button.addEventListener('click', (event) =>{
        inputChoice = event.target.value.toUpperCase();
        playRound(inputChoice);
    });
});

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function endGame(){
    buttons.forEach(button => {
        button.disabled=true;
    });
    pScore > mScore ? result.textContent="Player Wins" : result.textContent="Machine Wins";
    machineChoice.style.display="none";
    playerChoice.style.display="none";
}

function playRound(choice){
    let machineSelection=getComputerChoice();
    console.log(alternatives[machineSelection]);
    console.log(choice)
    machineChoice.textContent = "Machine: "+alternatives[machineSelection];
    playerChoice.textContent = "Player: "+ choice;
    
    if(choice==alternatives[machineSelection]){
        return result.textContent="DRAW";
    }
    

    switch(choice){
        case "ROCK":
            if(machineSelection==2){ // Win
                pScore++;
                playerScore.textContent="Player Score: "+pScore;
                result.textContent = "WIN";
                if(pScore==5) endGame();
                break;
            }
            if(machineSelection==1){ // lose
                mScore++;
                machineScore.textContent="Machine Score: "+mScore;
                result.textContent = "LOSE";
                if(mScore==5) endGame();
                break;
            }
        case "PAPER":
            if(machineSelection==0){ // Win
                pScore++;
                playerScore.textContent="Player Score: "+pScore;
                result.textContent = "WIN";
                if(pScore==5) endGame();
                break;
            }
            if(machineSelection==2){ // lose
                mScore++;
                machineScore.textContent="Machine Score: "+mScore;
                result.textContent = "LOSE";
                if(mScore==5) endGame();
                break;
            }
        case "SCISSORS":
            if(machineSelection==1){ // Win
                pScore++;
                playerScore.textContent="Player Score: "+pScore;
                result.textContent = "WIN";
                if(pScore==5) endGame();
                break;
            }
            if(machineSelection==0){ // lose
                mScore++;
                machineScore.textContent="Machine Score: "+mScore;
                result.textContent = "LOSE";
                if(mScore==5) endGame();
                break;
            }
    }
}



