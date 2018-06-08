function haystack(arr, str) {
  for (let i =0;i<arr.length;i++) {
    let splitArr = arr[i].split('');
    console.log(splitArr.includes(str));
  }
}

haystack(['ppp','aaaaaaaaaaaaaaa','ddddddddddddddddddddde','ffffff'],'e');
