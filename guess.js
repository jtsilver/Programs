console.log('Guess the number between 1-100 within 15 tries');
let prompt = require('prompt');
prompt.start();

const answer = Math.floor(Math.random()*100);
let guess = prompt.get('guess', function (err, result) {
    console.log(' Guess: ' + result.guess);
  });
console.log('What is your guess?');
guess;

for (let i=0;i<15;i++) {
  if (guess == answer) {
    console.log('YOU WIN!');
    console.log('You guessed in ' + (i+1) + ' tries!');
    break;
  }
  else if (guess > answer) {
    console.log('Too high. You have ' + (15-i) + ' tries remaining! Try again:');
    guess = prompt.get('guess', function (err, result) {
    console.log(' Guess: ' + result.guess);
    });
    guess;
  }
  else if (guess < answer) {
    console.log('Too low. You have ' + (15-i) + ' tries reamining! Try again:');
    guess = prompt.get('guess', function (err, result) {
    console.log(' Guess: ' + result.guess);
    });
    guess;
  }
}
