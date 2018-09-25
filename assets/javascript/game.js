// SETTING UP VARIABLES

// var gameState = document.getElementById("gameState");
// var wordToGuess = document.getElementById("wordToGuess");
// var lettersGuessed = document.getElementById("lettersGuessed");
var winsTotal = document.getElementById("winsTotal");
// var lossesTotal = document.getElementById("lossesTotal");
var thatPokemon = 0;
var PokeArray = [];
var chances = 10;
var losses = 0;
var wins = 0;

// HAVE AN ARRAY OF POKEMON TO GUESS

var pokemon = ["pikachu", "jigglypuff", "onyx", "eevee", "squirtle", "charmander", "bulbasaur", "mew", "mewtwo"];

// ON KEY-PRESS, GAME STARTS

function gameStart() {
    chances = 10;

    var gameState = document.getElementById("gameState");
    gameState.textContent = "WHAT'S THAT POKEMON? (Press Enter to Restart)";

    var lettersGuessed = document.getElementById("lettersGuessed");
    lettersGuessed.innerHTML = " ";

    // COMPUTER PICKS A WORD
    thatPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];

    var wordToGuess = document.getElementById("wordToGuess");

    //...AND DISPLAYS EMPTY SPACES

    PokeArray = [];

    for (i=0; i < thatPokemon.length; i++) {
        PokeArray[i] = " _ ";
    };

    wordToGuess.textContent = PokeArray.join(" ");
};

// NOW FOR GUESSING

function guessingTime() {
    var playerGuess = event.key.toLowerCase();
    var lettersGuessed = document.getElementById("lettersGuessed");
    var wordToGuess = document.getElementById("wordToGuess");

    // ON KEY PRESS, SAVE LETTER GUESSED...
    lettersGuessed.textContent = lettersGuessed.textContent + " " + playerGuess;
    
    //CHECK LETTER AGAINST WORD IN ARRAY AND SEE...

    // IF CORRECT...
    for (i=0; i < thatPokemon.length; i++) {
        if (thatPokemon.charAt(i) == playerGuess) {
            PokeArray[i] = playerGuess;
            wordToGuess.textContent = PokeArray.join(" ");
        };
    };
    
    chances--;

    document.getElementById("guessesLeft").textContent = chances;
};

// OR WRONG... (with wrong guess counter for tallying when a loss comes up)

// DISPLAY GUESSED POKEMON

// WIN STATE ACHIEVED

// and if you lose...

// running functions

// if (gameStarted) {
//     console.log("this is working");
// } else {
//     gameStart(pokemon, gameStarted);
//     console.log(gameStarted);
// };

document.onkeyup = function(event) {
    if (event.keyCode == 13) {
        gameStart(pokemon);
    } else {
        if (chances > 0) {
            guessingTime(thatPokemon, PokeArray);
        } else {
            var lossesTotal = document.getElementById("lossesTotal");
            losses++;
            lossesTotal.innerHTML = losses;
            gameStart(pokemon);
        }
    };
};

// guessingTime(thatPokemon, lettersGuessed);
