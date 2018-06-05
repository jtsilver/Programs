var num = prompt('Enter a number');
num;
let which = prompt('Type "SUM" to compute the sum of your number and other OR Type "PRODUCT" to compute the product of your number and another.');
which;

  if (which == 'sum') {
    let sum = prompt('Enter a number to add to '+num);
    alert(Number(num)+Number(sum));
  }
  else if (which == 'product') {
    let product = prompt('Enter a number to multiply by '+num);
    alert(Number(num)*Number(product));
  }
  else {
    alert('Please refresh and try again');
  }
