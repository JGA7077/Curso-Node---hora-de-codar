const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

  const user = {
    name: 'João',
    surname: 'Gabriel',
    age: 29
  }

  const palavra = 'Teste'

  res.render('home', { user, palavra })
});

app.listen(3333)
