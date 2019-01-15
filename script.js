let weapon = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let choose = "";
let playerSelection = "";
let computerSelection;
let winningScore = 5;
let btnInput = document.querySelector("#btnInput");
const playAgain = document.querySelector("#btnPlay");
const rockBtn = document.querySelector("#btnRock");
const paperBtn = document.querySelector("#btnPaper");
const scissorsBtn = document.querySelector("#btnScissors");
let cDisplay = document.querySelector("#cDisplay");
let pDisplay = document.querySelector("#pDisplay");
let cChoice = document.querySelector("#cChoice");
let pChoice = document.querySelector("#pChoice");
let loseText = document.querySelector(".winLose");
let winText = document.querySelector(".winLose");
let gameOver = 0;


rockBtn.addEventListener("click", function(){
  if(gameOver === 0){
    let choose = "rock";
    console.log(choose);
    playerSelection = choose;
    oneRound();
    endGame();
  };
});

paperBtn.addEventListener("click", function(){
  if(gameOver === 0){
    let choose = "paper";
    console.log(choose);
    playerSelection = choose;
    oneRound();
    endGame();
  };
});

scissorsBtn.addEventListener("click", function(){
  if(gameOver === 0){
    let choose = "scissors";
    console.log(choose);
    playerSelection = choose;
    oneRound();
    endGame();
  };
});

//set button for selecting winning score
btnInput.addEventListener("click", function(){
  let inputType = Math.floor(parseInt(prompt("Select the Winning Point")));
  if(typeof inputType == "number" && inputType > 0){
    winningScore = inputType;
    resetGame();
  } else {
    alert("Next time write a NUMBER, higher than zero.")
  };
});


playAgain.addEventListener("click", function(){
  resetGame();
});

//random computer choice
function computerPlay(weapon){
  return weapon[Math.floor(Math.random() * weapon.length)];
};

//updating display for current choices
function currentSelection(){
  cChoice.textContent = " : " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  pChoice.textContent = " : " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

//game rules
function winRules(){
  if (playerSelection === computerSelection) {
    console.log('no one wins');
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log('You won!!');
    pDisplay.textContent = " " + playerScore + " ";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log('You won');
    pDisplay.textContent = " " + playerScore + " ";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log('You won');
    pDisplay.textContent = " " + playerScore + " ";
  } else {
    computerScore++;
    console.log('Computer won');
    cDisplay.textContent = " " + computerScore + " ";
  };
}

//for one round of game
function oneRound() {
  computerPlay(weapon);
  computerSelection = computerPlay(weapon);
  currentSelection();
  winRules();
};

function winFunc(){
  winText.textContent = "You are the winner!!!"
  gameOver++
};

function looseFunc() {
  loseText.textContent = "Game Over"
  gameOver++
};

function endGame() {
  if(gameOver === 0 && playerScore === winningScore) {
    setTimeout(winFunc, 100);
  } else if (gameOver === 0 && computerScore === winningScore) {
    setTimeout(looseFunc, 100);
  } else {
    console.log("it is less than 5")
  };
};

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    gameOver = 0;
    cDisplay.textContent = " " + 0 + " ";
    pDisplay.textContent = " " + 0 + " ";
    loseText.textContent = "";
    winText.textContent = "";
    cChoice.textContent = " :";
    pChoice.textContent = " :";
};
