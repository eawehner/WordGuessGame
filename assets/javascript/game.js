// SETTING UP GLOBAL VARIABLES

var thatPokemon = 0;
var PokeArray = [];
var chances = 10;
var losses = 0;
var wins = 0;
var lettersLeft = 0;

// HAVE AN ARRAY OF POKEMON TO GUESS

var pokemon = ["pikachu", "jigglypuff", "onyx", "eevee", "squirtle", "charmander", "bulbasaur", "mew", "mewtwo", "raichu", "ditto", "growlithe", "articuno", "zapdos", "moltres", "ekans", "vulpix", "ninetales", "ponyta", "pidgey", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "rattata", "clefairy", "zubat", "oddish", "meowth"];

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

    lettersLeft = thatPokemon.length;

    wordToGuess.textContent = PokeArray.join(" ");
};

// NOW FOR GUESSING

function guessingTime() {
    var playerGuess = event.key.toLowerCase();
    var lettersGuessed = document.getElementById("lettersGuessed");
    var wordToGuess = document.getElementById("wordToGuess");

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
        gameState.innerHTML = "You won!";

        var winsTotal = document.getElementById("winsTotal");
        wins++;
        winsTotal.innerHTML = wins;

        setTimeout(gameStart,3000);
    };

    chances--;

    document.getElementById("guessesLeft").textContent = chances;
};

// running functions


document.onkeyup = function(event) {
    if (event.keyCode == 13) {
        gameStart(pokemon);
    } else {
        if (chances > 0) {
            guessingTime(thatPokemon, PokeArray);
        } else {
            // YOU LOST
            var gameState = document.getElementById("gameState");
            gameState.innerHTML = "You lost!";

            var lossesTotal = document.getElementById("lossesTotal");
            losses++;
            lossesTotal.innerHTML = losses;
            setTimeout(gameStart,3000);
        }
    };
};

