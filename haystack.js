function haystack(arr, str) {
  for (let i =0;i<arr.length;i++) {
    if (str.length == 1) {
      let splitArr = arr[i].split('');
      console.log(splitArr.includes(str));
    }
    else if (str.length > 1) {
      console.log(arr[i].includes(str));
    }
  }
}

haystack(['ppp','aaaaaaaaaaaaaaa','ddddddddddddddddddddde','ffffff'],'de');
