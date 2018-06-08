function longStr(arr) {
  let maxLength = 0;
  let maxString = '';
  for (let i = 0;i<arr.length;i++) {
    if (arr[i].length>maxLength) {
      maxLength = arr[i].length;
      maxString = arr[i];
    }
  }
  console.log(maxString);
}

let array = ['a','bb','ccc','dddd','e'];
longStr(array);
