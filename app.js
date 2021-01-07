// require the packages
const express = require('express');
const bodyParser = require('body-parser');

// create app constant by using express
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

// tell app to use ejs
app.set('view engine', 'ejs');

// initialize variables
var items = ['Eat', 'Sleep', 'Program', 'Coffee'];

// create the get route
app.get('/', function(req, res) {
  var today = new Date();
  // console.log(today.getDay());
  // res.send('Hello');

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  var day = today.toLocaleDateString('en-US', options);


  // getDay returns number 0-6 corresponding to the day of week
  var currentDay = today.getDay();

  var colorArray = {
    0: 'black',
    1: 'black',
    2: 'black',
    3: 'black',
    4: 'black',
    5: 'black',
    6: 'black'
  };

  var color = colorArray[currentDay];

  // render a file called list.ejs in views folder
  res.render('list', {
    kindOfDay: day,
    headerColor: color,
    newList: items
  });
});

app.post('/', function(req, res) {
  newItem = req.body.newItem;
  items.push(newItem);
  // redirect to home route and trigger the app.get
  res.redirect('/');
})

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
