//Import module
const path = require('path')
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

//use framework
const app = express();
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
 
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})
 
app.listen(3000)