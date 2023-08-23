const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

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

app.post('/books/insertbook', (req, res) => {
  const {title, pagesqty} = req.body;
  const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`

  conn.query(sql, function(err) {
    if (err) {
      console.error('Error on Insert Data', err)
      return;
    };

    res.redirect('/books');
  });
});

app.get('/book/:id', (req, res) => {
  const {id} = req.params;
  const sql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(sql, (err, data) => {
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

  conn.query(sql, function(err, data) {
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

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql2'
});

conn.connect(function(err) {
  if (err) {
    console.log('err ==>', err);
    return;
  }

  console.log('Conectou ao MySQL!');

  app.listen(3333);
})