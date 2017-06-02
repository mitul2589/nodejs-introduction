
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookmodel = new schema({
    title: String,
    author: String,
    age: Number
});

module.exports = mongoose.model('author', bookmodel);


