let schema = {
  properties: {
    text: {
      message: 'What word would you like translated to Pig Latin?'
    }
  }
}

let prompt = require('prompt');
prompt.start();

prompt.get(schema, function (err, result) {
  console.log(' Word: ' + result.text);
  let split = result.text.split('');
  if (split[1] == 'a' || split[1] == 'e' || split[1] == 'i' || split[1] == 'o' || split[1] == 'u') {
    for (let i = 0;i<split.length;i++) {
      if (split[i] != 'a' || split[i] != 'e' || split[i] != 'i' || split[i] != 'o' || split[i] != 'u') {
        let end = split.shift([i]);
        let join = split.join('');
        let together = join.concat(end)+'ay'
        together.toString();
        return console.log(together);
      }
    }
  }
  if (split[1] != 'a' || split[1] != 'e' || split[1] != 'i' || split[1] != 'o' || split[1] != 'u') {
    for (let i = 1;i<split.length;i++) {
      if (split[i] != 'a' || split[i] != 'e' || split[i] != 'i' || split[i] != 'o' || split[i] != 'u') {
        let end = (split.shift([i-1])+split.shift([i]));
        let join = split.join('');
        let together = join.concat(end)+'ay'
        together.toString();
        return console.log(together);
      }
    }
  }
});
