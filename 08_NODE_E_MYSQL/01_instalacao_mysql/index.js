const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/conn');

const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json())

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.post('/books/remove/:id', (req, res) => {
  const {id} = req.params;
  const sql = `DELETE FROM books WHERE id = ${id}`

  pool.query(sql, (err) => {
    if (err) {
      console.error(`Error on Delete Data With Id: ${id}`, err);
      return;
    };

    res.redirect('/books')
  })
})

app.post('/books/insertbook', (req, res) => {
  const {title, pagesqty} = req.body;
  const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`

  pool.query(sql, function(err) {
    if (err) {
      console.error('Error on Insert Data', err)
      return;
    };

    res.redirect('/books');
  });
});

app.post('/books/updatebook', (req, res) => {
  const {id, title, pagesqty} = req.body;

  const sql = `UPDATE books SET title = '${title}', pagesqty = '${pagesqty}' WHERE id = ${id}`

  pool.query(sql, (err, data) => {
    if (err) {
      console.error(`Error on Update Data With Id: ${id}`, err)
      return;
    }

    res.redirect('/books')
  })
})

app.get('/books/edit/:id', (req, res) => {
  const {id} = req.params;
  const sql = `SELECT * FROM books WHERE id = ${id}`;

  pool.query(sql, (err, data) => {
    if (err) {
      console.error(`Error on Get Data With Id: ${id}`, err)
      return;
    }

    const book = data[0];

    res.render('editbook', {book});
  })
})

app.get('/book/:id', (req, res) => {
  const {id} = req.params;
  const sql = `SELECT * FROM books WHERE id = ${id}`

  pool.query(sql, (err, data) => {
    if (err) {
      console.error(`Error on Get Data With Id: ${id}`, err)
      return;
    }

    const book = data[0];

    res.render('book', {book});
  })
})

app.get('/books', (req, res) => {
  const sql = `SELECT * FROM books`

  pool.query(sql, function(err, data) {
    if (err) {
      console.error('Error on Get Data', err)
      return;
    }

    const books = data;

    res.render('books', {books})
  })
})

app.get('/', (req, res) => {
  res.render('home')
});

app.listen(3333);