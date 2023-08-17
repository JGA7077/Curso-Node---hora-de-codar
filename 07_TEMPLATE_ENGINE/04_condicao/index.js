const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

  const productItems = [
    {
      name: 'mouse',
      price: 30
    },
    {
      name: 'notebook',
      price: 3500
    },
    {
      name: 'monitor',
      price: 700
    }
  ]

  res.render('dashboard', {productItems})
})

app.get('/', (req, res) => {

  const user = {
    name: 'João',
    surname: 'Gabriel',
    age: 29
  }

  const palavra = 'Teste'

  const auth = true;

  const approved = false;

  res.render('home', { user, palavra, auth, approved })
});

app.listen(3333)
