// SETTING UP VARIABLES

// var gameState = document.getElementById("gameState");
var wordToGuess = document.getElementById("wordToGuess");
var lettersGuessed = document.getElementById("lettersGuessed");
var winsTotal = document.getElementById("winsTotal");
var lossesTotal = document.getElementById("lossesTotal");

// HAVE AN ARRAY OF POKEMON TO GUESS

var pokemon = ["pikachu", "jigglypuff", "onyx", "eevee", "squirtle", "charmander", "bulbasaur", "mew", "mewtwo"];

// ON KEY-PRESS, GAME STARTS

document.onkeyup = function(event) {
    var gameState = document.getElementById("gameState");
    gameState.innerHTML = "WHAT'S THAT POKEMON?";

    
};

// COMPUTER PICKS A WORD AND DISPLAYS EMPTY SPACES

// ON KEY PRESS, CHECK LETTER AGAINST WORD IN ARRAY AND LOG...

// IF CORRECT...

// OR WRONG... (with wrong guess counter for tallying when a loss comes up)

// DISPLAY GUESSED POKEMON

// WIN STATE ACHIEVED