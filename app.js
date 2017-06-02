var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var url = 'mongodb://localhost/admin';
var db = mongoose.connect(url);

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var Book = require('./models/book');

Book.create({
  title: 'vdvfdv'
});
var BookRouter = require('./bookrouter')(Book);

app.use('/api/Books', BookRouter);

app.get('/', function (req, res) {
  res.end('Hello World');
});

app.listen(3000, function () {
  console.log('Listening to 3000 port');
});
