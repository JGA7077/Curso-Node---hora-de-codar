const express = require('express');
const app = express();
const port = 5000;

const path = require('path');
const basePath = path.join(__dirname, 'templates');

app.use(express.static('public'))

const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

app.use('/products', productsRoutes);

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log('app rodando na porta ==>', port);
})