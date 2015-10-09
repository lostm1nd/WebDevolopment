var express = require('express');

var routes = function (Book) {
	var bookController = require('../controllers/bookController')(Book);
	var bookRouter = express.Router();

	bookRouter.route('/')
		.get(bookController.get)
		.post(bookController.post);

	bookRouter.use('/:bookId', function (req, res, next) {
		Book.findById(req.params.bookId, function (err, book) {
			if (err) {
				res.status(500).send(err);
			}

			if (!book) {
				res.status(404).send('No book with id: ' + req.params.bookId);
			}

			req.book = book;
			next();
		});
	});

	bookRouter.route('/:bookId')
		.get(function (req, res) {
			res.json(req.book);
		})
		.put(function (req, res) {
			req.book.title = req.body.title;
			req.book.author = req.body.author;
			req.book.genre = req.body.genre;
			req.book.read = req.body.read;

			req.book.save(function (err) {
				if (err) {
					res.status(500).send(err);
				}

				res.json(req.book);
			});
		})
		.patch(function (req, res) {
			Object.keys(req.body)
				.filter(function (key) {
					return key !== '_id';
				})
				.forEach(function (key) {
					req.book[key] = req.body[key];
				});

			req.book.save(function (err) {
				if (err) {
					res.status(500).send(err);
				}

				res.json(req.book);
			});
		})
		.delete(function (req, res) {
			req.book.remove(function (err) {
				if (err) {
					res.status(500).send(err);
				}

				res.status(204).send('Deleted');
			});
		});

	return bookRouter;
};

module.exports = routes;
