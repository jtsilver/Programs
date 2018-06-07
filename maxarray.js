function max (arr) {
  let maxArr = [];
  for (let i = 0; i<arr.length;i++) {
    if (arr[i++]<arr[i]) {
      maxArr = arr[i];
    }
  }
  console.log(maxArr);
}

max([1,2,3,4,5,6,4,9000009]);
