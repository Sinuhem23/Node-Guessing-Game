var Letter = require("./letter");

function Word(correctWord) {
    this.correctWord = correctWord;
    this.letters = [];

    this.generateLetters = function() {
        var correctWordArray = this.correctWord.split('');
        for (var i = 0; i < correctWordArray.length; i++){
            var newLetter = new Letter(correctWordArray[i]);
            this.letters.push(newLetter);
        };
    };
    this.makeAguess = function(guess) {
     for (var m=0; m < this.letters.length; m++){
         this.letters[m].check(guess);
     };
    };
    this.update = function() {
        var string = ''
        for (var s=0; s < this.letters.length; s++){
            string += this.letters[s].returnCharacter();
        };
        return string;
    };
};
module.exports = Word;