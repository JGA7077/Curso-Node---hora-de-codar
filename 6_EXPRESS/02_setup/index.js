const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
  // req é o que o usuário envia/acessa algo
  // res é o que a gente devolve pro usuário

  res.send('Olá Mundo!!')
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
})