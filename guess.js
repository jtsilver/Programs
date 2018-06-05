alert('Guess the number between 1-100 within 20 tries')

const answer = Math.floor(Math.random()*100);
var guess = prompt('Enter your guess:');

for (i=0;i<20;i++) {
  if (guess == answer) {
    alert('YOU WIN!');
    alert('You guessed in ' + (i+1) + ' tries!');
    break;
  }
  else if (guess > answer) {
    guess = prompt('Too high. You have ' + (20-i) + ' tries remaining! Try again:')
  }
  else if (guess < answer) {
    guess = prompt('Too low. You have ' + (20-i) + ' tries reamining! Try again:')
  }
}
