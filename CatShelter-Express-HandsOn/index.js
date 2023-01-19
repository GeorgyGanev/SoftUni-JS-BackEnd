const express = require('express');
const hbr = require('express-handlebars');

const homeController = require('./controllers/homeController');
const addCatController = require('./controllers/addCatController');
const addBreedController = require('./controllers/addBreedController');

const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: false}));

app.use('/static', express.static('static'));

app.use(homeController);
app.use('/add-cat', addCatController);
app.use('/add-breed', addBreedController);

app.listen(3000);
console.log('app listening...');


