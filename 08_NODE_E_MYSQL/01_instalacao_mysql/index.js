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

    res.redirect('/')
  });
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