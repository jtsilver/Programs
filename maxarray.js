function max (arr) {
  let maxArr = 0;
  for (let i = 0; i<arr.length;i++) {
    if (arr[i]>maxArr) {
      maxArr = arr[i];
    }
  }
  console.log(maxArr);
}

max([1,2002,2,3,4,5,6,4,90000009]);
