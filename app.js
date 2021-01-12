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
let items = ['Eat', 'Sleep', 'Program', 'Coffee'];
let workItems = [];

// HOME
app.get('/', function(req, res) {
  let today = new Date();
  // console.log(today.getDay());
  // res.send('Hello');

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  let day = today.toLocaleDateString('en-US', options);


  // getDay returns number 0-6 corresponding to the day of week
  let currentDay = today.getDay();

  let colorArray = {
    0: 'black',
    1: 'black',
    2: 'black',
    3: 'black',
    4: 'black',
    5: 'black',
    6: 'black'
  };

  let color = colorArray[currentDay];

  // render a file called list.ejs in views folder
  res.render('list', {
    listTitle: day,
    headerColor: color,
    newList: items
  });
});

app.post('/', function(req, res) {
  // you can pass the "value" property in a button with ejs variable
  // console.log(req.body);
  let newItem = req.body.newItem;

  if (req.body.list === 'Work List') {
    workItems.push(newItem);
    res.redirect('/work');
  } else {
    items.push(newItem);
    res.redirect('/');
  }

})

// WORK
app.get('/work', function(req, res){
  res.render('list', {listTitle: 'Work List', newList: workItems});
});

app.post('/work', function(req, res){
  console.log(req.body);
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

// ABOUT
app.get('/about', function(req, res){
  res.render('about');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
