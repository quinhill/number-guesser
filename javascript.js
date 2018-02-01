var randomNumber = Math.floor((Math.random() * 100) + 1);

var input = document.querySelector('#number-input');

var guessButton = document.querySelector('.guess-button');

var userLastGuess = document.querySelector('.user-last-guess');

var numberLastGuess = document.querySelector('.nr-last-guess');

var clearButton = document.querySelector('.clear-button');

var resetButton = document.querySelector('.reset-button');

var userGuess ;

var CompareNumbersText = document.querySelector('.that-is');

guessButton.addEventListener('click', userGuess)

clearButton.addEventListener('click', function(){
  input.value = '';
})



function userGuess() {
  userGuess = parseInt(input.value);
  console.log(userGuess);
  compareNumbers();
  yourLastGuess();
  numberLastGuessed();
  input.value = '';
  input.focus();
}

function compareNumbers() {
  console.log('compare', randomNumber);
  if (userGuess < randomNumber) {
    CompareNumbersText.innerText = 'That is too low'
  } else if (userGuess > randomNumber) {
    CompareNumbersText.innerText = 'That is too high'
  } else if (userGuess === randomNumber) {
    CompareNumbersText.innerText = 'Boom!'
  } else {
    CompareNumbersText.innerText = 'Those were not my instructions!'
  }
}
console.log(CompareNumbersText);

function yourLastGuess() {
  userLastGuess.innerText = 'Your last guess was';
}

function numberLastGuessed() {
  console.log(numberLastGuess)
  numberLastGuess.innerText = userGuess;
}

console.log(yourLastGuess)

resetButton.addEventListener('click', function() {
  location.reload();
})

//



