const gameOptions = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;

let winCount = 0;
let lossCount = 0;


const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('losses');
const resultsDisplay = document.getElementById('results');
const compDisplay = document.getElementById('computer-choice');
const rockBtn = document.getElementById('Rock');
const paperBtn = document.getElementById('Paper');
const scissorsBtn = document.getElementById('Scissors');




    rockBtn.addEventListener("click", function() {
        playRound(gameOptions[0], getComputerSelection());
      });
      paperBtn.addEventListener("click", function() {
        playRound(gameOptions[1], getComputerSelection());
      });

      scissorsBtn.addEventListener("click", function() {
        playRound(gameOptions[2], getComputerSelection());
      });






function getComputerSelection(){
let randomNum = Math.floor(Math.random() * 3);
computerSelection = gameOptions[randomNum];
compDisplay.textContent = "Computer has selected " + computerSelection;
console.log("computer selected " + computerSelection);
return computerSelection;
}


function playRound(playerSelection, computerSelection){
    console.log("player selected " + playerSelection);

    if (playerSelection === gameOptions[0] && computerSelection === gameOptions[1]){
        console.log("lose");
        resultsDisplay.textContent = "Paper beats rock, you loose!";
        lossCount++;
        lossDisplay.textContent = lossCount;
    } else if (playerSelection === gameOptions[0] && computerSelection === gameOptions[2]){
        console.log("win");
        resultsDisplay.textContent = "Rock beats paper, you win!";
        winCount++;
        winDisplay.textContent = winCount;
    
    } else if (playerSelection === gameOptions[1] && computerSelection === gameOptions[2]){
        console.log("lose");
        resultsDisplay.textContent = "Scissors beats paper, you loose!";
        lossCount++;
        lossDisplay.textContent = lossCount;
        } else if (playerSelection === gameOptions[1] && computerSelection === gameOptions[1]){
            console.log("win");
            resultsDisplay.textContent = "Paper beats rock, you win!";
            winCount++;
            winDisplay.textContent = winCount;
        }
    
        else if (playerSelection === gameOptions[2] && computerSelection === gameOptions[0]){
            console.log("lose");
            resultsDisplay.textContent = "Rock beats scissors, you loose!";
            lossCount++;
            lossDisplay.textContent = lossCount;
            } else if (playerSelection === gameOptions[2] && computerSelection === gameOptions[2]){
                console.log("win");
                resultsDisplay.textContent = "Scissors beats paper, you win!";
                winCount++;
                winDisplay.textContent = winCount;
            } else {
                resultsDisplay.textContent = "Its a draw!";
            }
        
    
    } 