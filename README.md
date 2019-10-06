# Node-Guessing-Game

Installation
You can install and run with NPM. All you have to do is open your terminal and type the following commands:

$ git clone https://github.com/Sinuhem23/Node-Guessing-Game.git

$ cd Node-Guessing-Game

$ npm install

Then, start the game with:

$ node index.js


How To Play:

Once you have begun, your terminal should display "ready to guess!?! with a bonus hint. A word is to be figured out by typing any letter. Displayed next are guesses left, incorrect guesses so far, and the letter to guess. 

After selecting a letter,

* If guessed incorrect, your span of 9 guesses will decrease by 1. The letter you guessed will remain and displayed under "Incorrect guesses so far". 

* If guessed correct, your span of 9 guesses will remain and the correct letter will be displayed by "Word".

If all words are guessed before reaching 0 guesses left, then you win! Otherwise you lose and the correct word will be displayed.

There is a prompt to play again which you can simply decide with a y for yes or n for no(and/or type yes, no).

* Also, if more than one letter is typed, you will be notified as well as if letter is repeated and/or nothing is entered.