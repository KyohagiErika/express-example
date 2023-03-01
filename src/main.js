const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.engine('handlebars', expressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Long',
        time: new Date().toLocaleTimeString()
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});