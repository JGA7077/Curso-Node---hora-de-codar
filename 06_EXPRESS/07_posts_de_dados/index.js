const express = require('express');
const app = express();
const port = 3333;

const path = require('path');
const basePath = path.join(__dirname, 'templates');

// ler o body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
  console.log('req.body ==>', req.body);

  const {name, age} = req.body

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

  res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id

  // leitura da tabela users, resgatar um usuário
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
})

