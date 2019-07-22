const words = ["lasagna", "pizza", "zodiac"];
const letters = ["a", "b,", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wins = 0;
console.log("Wins " + wins);
let losses = 0;
console.log("Losses " + losses);


function game(x) {
    let wordNum = words[x];

    let wordLength = words[x].length;
    console.log("Word Length " + wordLength);

    for (let i = 0; i < wordLength; i++) {
        $("#word").append(`<span id="${wordNum[i]}">`);
    }
    let userGuessArr = [];

    let numberGuesses = 15;
    console.log("Number Guesses " + numberGuesses);

    $(document).keyup(function (event) {
        let userGuess = event.key;
        console.log(userGuess);

        if (userGuessArr.includes(userGuess)) {

            console.log("ALREADY GUESSED");
        } else if (letters.includes(userGuess)) {
            userGuessArr.push(userGuess);
            $("#used-letters").append("<span>" + userGuess);
            console.log(userGuessArr);

        }

        if (words[x].includes(userGuess)) {
            console.log("CORRECT GUESS");
            let id = "#" + userGuess;
            console.log(id);
            $(id).text(userGuess);
           
        } else {
            console.log("INCORRECT GUESS");
        }







    })





}
game(1);






