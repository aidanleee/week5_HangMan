(() => { //allways include this as syntax
// variables always go at the the og the file "let, const, var"


// Variables
  var words = ["party", "javascript", "vampire", "pancake", "hockey"];  // this is an array that holds words. Make array for each cateragory

  let currentWord = words[Math.floor(Math.random()*words.length)],
      wordHint = document.querySelector('.current-word'), //call this wordhint. to find go into doucment. use the query selector to find this css class
      guessBox = document.querySelector('.letter-guess'),
      wrongGuesses = 0,
      resetScreen = document.querySelector('.resetScreen'),
      resetButton = document.querySelector('button');
      wrongLetters = document.querySelector('.wrong-letters'),
      wrongLetterArray = [];


// Functions
  function showResetScreen() {
    resetScreen.classList.add('show-piece');
    let gamePieces = Array.from(document.querySelectorAll('show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));

    init();
  }


  function makeGuess() {
    console.log(this.value);

    if(this.value == "" || this.value.length < 1) {
      return;
    }
    // set up the path through the app
    // inside the round brckets, check for a condiition
    if(currentWord.indexOf(this.value)< 0) {  //indexOf means find this letter and tell me where it is
      // push the wrong letter into the array
      wrongLetterArray.push(this.value);
      wrongLetters.textContent = wrongLetterArray.join(" ");

      // the person chose the wrong letter, track the wrong answer
      // an index of less than 0 means the letter isn't in the word
    if(wrongGuesses >= 5) {
      console.log('you lose, loser!');
      showResetScreen();
      // show losing screen
    }else{
      document.querySelector(`.wrong${wrongGuesses}`).classList.add(`show-piece`);
      //increment the wrong guess count, show a piece of the hangman
      debugger;
      wrongGuesses++; // this will be the last step
      // person chose a letter that matches, guess again
    }
  }


  function init() {
    // look at MDN -> the Math object
    currentWord = words[Math.floor(Math.random()*words.length)];
    // fill in the hint with underscores -> MDN string methods / array .map method
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");
    //MDN -> template string
    console.log(`guess this word: ${currentWord}. It's at ${words.indexOf(currentWord)}`);
  }


// Listeners
  guessBox.addEventListener('keyup', makeGuess);
  resetButton.addEventListener('click', resetGame);

  init();
})();
