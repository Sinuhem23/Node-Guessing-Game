//  A string value to store the underlying character for the letter
function Letter(character) {
    this.character = character.toUpperCase();
  
//  A boolean value that stores whether that letter has been guessed yet
this.guessedRight = false;
//  A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
this.returnCharacter = function() {
    if (this.guessedRight){
        return this.character;
    }else {
      
            p = '_';
            // s = p.split(' ');
        
        return  p;
    };
};
//  A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
this.check = function(guess) {
    if (this.character.toLowerCase() == guess.toLowerCase()) {
        this.guessedRight = true;
    }else {
    };
    };
};
module.exports = Letter;    
