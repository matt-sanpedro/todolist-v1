// require the packages
const express = require('express');
const bodyParser = require('body-parser');

// create app constant by using express
const app = express();

// tell app to use ejs
app.set('view engine', 'ejs');

// create the get route
app.get('/', function(req, res){
  var today = new Date();
  // console.log(today.getDay());
  // res.send('Hello');

  // getDay returns number 0-6 corresponding to the day of week
  var currentDay = today.getDay();

  // day array
  var dayArray = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'};

  var day = dayArray[currentDay]

  // render a file called list.ejs in views folder
  res.render('list', {kindOfDay: day});
})

app.listen(3000, function(){
  console.log('Server started on port 3000');
})
