const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', (req, res) => {

  const user = {
    name: 'João',
    surname: 'Gabriel',
    age: 29
  }

  const palavra = 'Teste'

  const auth = false;

  res.render('home', { user, palavra, auth })
});

app.listen(3333)
