let prompt = require('prompt');

prompt.start();

let num = prompt.get('number', function (err, result) {
    console.log(' Number: ' + result.number);
  });
console.log('Enter a number: ');
num;

console.log(' ');

for (i=0;i<13;i++) {
  console.log(' ',num,' * ',i,' = ',num*i);
}
