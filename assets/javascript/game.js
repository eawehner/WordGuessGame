// SETTING UP GLOBAL VARIABLES

var thatPokemon = 0;
var PokeArray = [];
var chances = 10;
var losses = 0;
var wins = 0;
var lettersLeft = 0;

// HAVE AN ARRAY OF POKEMON TO GUESS

var pokemon = ["pikachu", "jigglypuff", "onyx", "eevee", "squirtle", "charmander", "bulbasaur", "mew", "mewtwo", "raichu", "ditto", "growlithe", "articuno", "zapdos", "moltres", "ekans", "vulpix", "ninetales", "ponyta", "pidgey", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "rattata", "clefairy", "zubat", "oddish", "meowth"];

var pastGuesses = [];

// ON KEY-PRESS, GAME STARTS
function gameStart() {
    chances = 10;

    var gameState = document.getElementById("gameState");
    gameState.innerHTML = "<b>WHAT'S THAT POKEMON?</b> <i>(Press Enter to Restart)</i>";

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

    lettersLeft = thatPokemon.length;
    
    document.getElementById("guessesLeft").textContent = chances;

    wordToGuess.textContent = PokeArray.join(" ");

    pastGuesses = [];
};

// NOW FOR GUESSING

function guessingTime() {
    var playerGuess = event.key.toLowerCase();
    var lettersGuessed = document.getElementById("lettersGuessed");
    var wordToGuess = document.getElementById("wordToGuess");

    if (!pastGuesses.length) {
        pastGuesses.push(playerGuess);

        lettersGuessed.textContent = lettersGuessed.textContent + " " + playerGuess;

        chances--;

        document.getElementById("guessesLeft").textContent = chances;
    } else {
        for (i=0; i < pastGuesses.length; i++) {
            if (pastGuesses[i] == playerGuess) {
                gameState.innerHTML = "<b>That letter has already been guessed!</b>"
                return;
            }
        }

        pastGuesses.push(playerGuess);
        console.log(pastGuesses);

        // ON KEY PRESS, SAVE LETTER GUESSED...
        lettersGuessed.textContent = lettersGuessed.textContent + " " + playerGuess;
    
        //CHECK LETTER AGAINST WORD IN ARRAY AND SEE IF CORRECT
        for (i=0; i < thatPokemon.length; i++) {
            if (thatPokemon.charAt(i) == playerGuess) {
                PokeArray[i] = playerGuess;
                wordToGuess.textContent = PokeArray.join("");

                lettersLeft--;
            };
        };


        // WIN STATE ACHIEVED

        if (lettersLeft == 0) {
            var gameState = document.getElementById("gameState");
            gameState.innerHTML = "<b>You won!</b> Game will restart soon!";

            var winsTotal = document.getElementById("winsTotal");
            wins++;
            winsTotal.innerHTML = wins;

            setTimeout(gameStart,3000);
        };

        chances--;

        document.getElementById("guessesLeft").textContent = chances;
    };
};

// running functions on keypress

document.onkeyup = function(event) {
    if (event.keyCode == 13) {
        gameStart(pokemon);
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            if (chances > 0) {
                guessingTime(thatPokemon, PokeArray, pastGuesses);
            } else {
                // YOU LOST
                var gameState = document.getElementById("gameState");
                gameState.innerHTML = "<b>You lost!</b> Game will restart soon!";

                var lossesTotal = document.getElementById("lossesTotal");
                losses++;
                lossesTotal.innerHTML = losses;
                setTimeout(gameStart,3000);
            }
        }
    };
};

