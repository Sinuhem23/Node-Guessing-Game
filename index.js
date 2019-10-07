var inquirer = require('inquirer');
var Word = require('./word');
var chalk = require('chalk');

var words = ['Ankh','Pharaoh','Pyramids','Cairo','Eygpt'];
 
var correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
correctWord.generateLetters();

var remainingGuesses = 9;
var guessSoFar = [];// should be wrong guesses
var gotRight = [];

console.log(chalk.green.underline('\nReady to GUESS!?!\n'));
console.log(chalk.yellow("hint:") + 'Revolves around ancient times on the biggest continent!');


// RESET
function endGame(outcome) {
if(outcome === 'win'){
    console.log(chalk.cyanBright.bold('\nYOU WON!'));
    console.log(chalk.magenta('You Guessed ' + chalk.blueBright.bold(correctWord.correctWord.toUpperCase()) + '' + '\n' + chalk.bgGreen.black('with ' + (remainingGuesses) + ' guesses remaining.') + '\n')
    )
}else{
    console.log('\n' + chalk.magenta.bold('You Lost'));
    console.log(chalk.blue('The correct word was: ') + chalk.bgYellow.black(correctWord.correctWord + '.') + '\n');
};
correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
correctWord.generateLetters();
remainingGuesses = 9;
guessSoFar = [];
gotRight = [];



inquirer.prompt([
    {
      message: "Would you like to play again?",
      name: "confirm",
      type: "confirm",
    }
]).then(function(response){
    if(response.confirm){
        console.log(chalk.blue('\nPerfect! Generating a new word'));
        main();
    }else {
        console.log(chalk.cyan("\nSee YA!\n"));
        return;
    };
});
};

// Main Game
function main() {
    inquirer.prompt([
        {
            name: 'guess',
            prefix: '',
            message: chalk.magenta('\nWord: ') + chalk.green(correctWord.update()) +
            chalk.blue('\n\nGuesses left: ') + (remainingGuesses) +
            chalk.yellow('\nGuesses so far: ') + 
            (guessSoFar.join('')) + '\n' + chalk.cyan('Correct guesses:') +
            chalk.cyan.bold(gotRight.join('')) + '\n' + 'Guess a letter:' 
           



        }
    ]).then(function (data){
        // users input
        if(data.guess === ''){
            console.log(chalk.bgRed.white.bold('oHoH!') + chalk.yellowBright('You did not enter a letter'));
            return main();

        }else if (data.guess.length > 1) {
            console.log(chalk.bgRed.white.bold('\noHoH!') + chalk.yellowBright('Please guess one letter at a time.'));
            return main();
        }else if (guessSoFar.includes(data.guess)){
           console.log(chalk.bgRed.white.bold('\noHoH!') + chalk.yellowBright('You have already guessed that, guess again'));
           return main(); 
        };
         // Only decrement guessesRemaining on an incorrect guess
    if (!correctWord.correctWord.includes(data.guess)) {
        remainingGuesses--;
    }
 // Correct guesses
 if (correctWord.correctWord.includes(data.guess)){
    console.log(chalk.bgWhite.cyan.bold('\nNICE!'));
    gotRight.push(data.guess);

}

    guessSoFar.push(data.guess);
      

    for (var i=0; i < correctWord.letters.length; i++) {
        correctWord.letters[i].check(data.guess);
    };
    if (correctWord.update().toLowerCase() == correctWord.correctWord.toLowerCase()){
        endGame('win');
        return;
    };
    if (remainingGuesses == 0) {
        endGame('loss');
        return;
    };
    main();
        
    });
};
main();