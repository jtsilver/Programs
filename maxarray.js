function max (arr) {
  let maxArr = [];
  for (let i = 0; i<arr.length;i++) {
    if (arr[i]>arr[i-1] || arr[i+1]<arr[i]) {
      maxArr = [arr[i]]
    }
  }
  console.log(maxArr);
}

max([1,2,3,4,5,6]);
