/**
 * Guess The Number Game
 */

// Variable to store the list of guesses 
let guess = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory(numberGuess);
 
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */
// *CODE GOES BELOW HERE *
const displayResult=(numberGuess)=>{
  if (numberGuess>correctNumber){
    showNumberAbove();
  } else if (numberGuess<correctNumber){
    showNumberBelow();
  } else {
    showYouWon();
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  correctNumber=getRandomNumber();
  resetResultContent();
  guess= [];
  displayHistory();

}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let wholenum = Math.floor(Math.random() * 100) + 1;
  return wholenum
}

/**
 * Save guess history 
 */
function saveGuessHistory(anyguess) {
  guess.push(anyguess)
}

/**
 * Display guess history to user
 */
function displayHistory() {
  let index=guess.length -1;
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while(index >= 0){
    list+=`<li class='list-group-item'>
    You guessed ${guess[index]}</li>`;
    index--;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}
