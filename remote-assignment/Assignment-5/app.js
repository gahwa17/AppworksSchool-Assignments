const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
  let number = req.query.number;
  if(!number) {
    res.send('Lack of Parameter');
  }
  else {
    number = parseInt(number);
    if(Number.isNaN(number)) {
      res.send('Wrong Parameter');
    }
    else {
      /* Note
      console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
      console.log(Number.MAX_); // 1.7976931348623157e+308
      Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 // true
      */
      
      // Check if the number exceeds the safe calculation range
      if(number >= Number.MAX_SAFE_INTEGER){
        res.send('Number exceeds the safe calculation range');
      }
      else{
        let sum = (1 + number) * number / 2;
        res.send(`The sum of (1+2+....+${number}) is ${sum}`);
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});