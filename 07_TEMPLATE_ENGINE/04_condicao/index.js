const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
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

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'Javascript',
    body: 'Este artigo vai te ajudar a aprender Node.js.....',
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'Javascript',
      body: 'Este artigo vai te ajudar a aprender Node.js.....',
      comments: 4
    },
    {
      title: 'Aprender Javascript',
      category: 'Javascript',
      body: 'Teste',
      comments: 4
    },
    {
      title: 'Aprender PHP',
      category: 'PHP',
      body: 'Teste',
      comments: 4
    }
  ]

  res.render('blog', {posts})
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
