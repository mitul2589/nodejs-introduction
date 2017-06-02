var express = require('express');
var BookRouter = express.Router();

var bookrouter = function (Book) {

    BookRouter.route('/')
        .get(function (req, res) {
            Book.find(req.query, function (err, books) {
                res.json(books);
            });
        })
        .post(function (req, res) {
            var book = new Book(req.body);
            book.save();
            res.send(book);
        });

    BookRouter.use('/:bookId', function (req, res, next) {
        Book.findById(req.params.bookId, function (err, books) {
            if (err) {
                res.status(500).send(err);
            } else {
                req.book = books;
                next();
            }

        });
    });

    BookRouter.route('/:bookId')
        .get(function (req, res) {
            res.send(req.book);
        })
        .put(function (req, res) {
            req.book.title = req.body.title;
            req.book.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(req.book);
                }
            });
        })
        .patch(function (req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            for(var k in req.body) {
                req.book[k] = req.body[k];
            }
            req.book.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(req.book);
                }
            });
        })
        .delete(function(req, res) {
             req.book.remove(function(err) {
                 res.send('Deleted');
             });
        });

    return BookRouter;

};

module.exports = bookrouter;