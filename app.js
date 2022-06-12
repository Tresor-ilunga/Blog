var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Article = require('./models/article.model');
const Category = require('./models/category.model');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Prise en charge du JSON
app.use(bodyParser.json());

// Prise en charge des formulaires HTML
app.use(bodyParser.urlencoded({ extended: false }));

/*
for (let index = 0; index < 8; index++) {
    article = new Article({
        name: 'Qu\'est-ce que le Lorem Ipsum?',
        content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression',
        publishedAt: Date.now()
    })
    article.save();
}
*/


for (let index = 0; index < 8; index++) {
    category = new Category({
        title: 'Qu\'est-ce que le Lorem Ipsum?',
        description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression',
    })
    category.save();
}


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog')
    .then(() => console.log("Connexion à mongoDB réussie"))
    .catch(() => console.log("Connexion à mongoDB échouée"));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;