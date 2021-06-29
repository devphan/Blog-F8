//Import module
const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars')
//use framework
const app = express();
const route = require('./routers')

//read static file
app.use(express.static(path.join(__dirname, 'public')))

//Template engineA
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
 
//Route init
route(app) //set cac app.get() trong file index router

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(3000)