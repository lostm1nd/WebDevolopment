var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Book = require('./models/bookModel');
var bookRouter = require('./routes/bookRoutes')(Book);

var app = express();
var port = process.env.PORT || 3000;
var db;

if (process.env.ENV === 'Test') {
	db = mongoose.connect('mongodb://localhost/bookAPI_test');
} else {
	db = mongoose.connect('mongodb://localhost/bookAPI');
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function (req, res) {
	res.send('Welcome. You can access the API at "/api/books".');
});

app.listen(port, function () {
	console.log('app is running on PORT: ' + port);
});

module.exports = app;
