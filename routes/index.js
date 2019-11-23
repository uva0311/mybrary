const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  let books;
  try {
    books = Book.find()
      .sort({ createAt: 'desc' })
      .limit(10)
      .exec();
  } catch (err) {
    books = [];
  }
  res.render('index', { books: books });
});

module.exports = router;
