function charCount(arr, char) {
  let charNum = 0;
  for (let i = 0;i<arr.length;i++) {
    let splitArr = arr[i].split('');
    for (let j=0;j<splitArr.length;j++) {
      if (splitArr[j]==char) {
        ++charNum;
      }
    }
  }
  console.log(charNum);
}

charCount(['abc','bb','abbbc'], 'b');
