var should = require('should');
var supertest = require('supertest');
var mongoose = require('mongoose');
var app = require('../app');

var agent = supertest.agent(app);
var Book = mongoose.model('Book');

describe('Book CRUD test', function () {
	it('should allow a book to be posted and return _id and read fields', function (done) {
		var bookPost = {
			title: 'test title',
			author: 'test author',
			genre: 'fiction'
		};

		agent.post('/api/books')
			.send(bookPost)
			.expect(200)
			.end(function (err, res) {
				res.body.should.have.property('_id');
				res.body.read.should.equal(false);
				done();
			});
	});

	afterEach(function (done) {
		Book.remove().exec();
		done();
	});
});
