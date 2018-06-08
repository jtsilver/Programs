function haystack(arr, str) {
  if (str.length == 1) {
    for (let i =0;i<arr.length;i++) {
      let splitArr = arr[i].split('');
      console.log(splitArr.includes(str));
    }
  }
  else if (str.length > 1) {
    for (let i = 0;i<arr.length;i++) {
      console.log(arr[i].includes(str));
    }
  }
}

haystack(['ppp','aaaaaaaaaaaaaaa','ddddddddddddddddddddde','ffffff'],'de');
