// require the packages
const express = require('express');
const bodyParser = require('body-parser');

// create app constant by using express
const app = express();

// create the get route
app.get('/', function(req, res){
  var today = new Date();
  // console.log(today.getDay());
  // res.send('Hello');

  // getDay returns number 0-6 corresponding to the day of week
  var currentDay = today.getDay();

  // can use res.write() to send multiple pieces of data
  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>It's the weekend!</h1>");
    res.send();
  } else {
    res.sendFile(__dirname + '/index.html');
  }
})

app.listen(3000, function(){
  console.log('Server started on port 3000');
})
