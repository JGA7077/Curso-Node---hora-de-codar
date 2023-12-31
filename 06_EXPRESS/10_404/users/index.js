const express = require('express');
const router = express.Router();

const path = require('path');
const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  console.log('req.body ==>', req.body);

  const {name, age} = req.body

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

  res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  // leitura da tabela users, resgatar um usuário
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
})

module.exports = router;