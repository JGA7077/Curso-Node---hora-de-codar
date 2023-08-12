// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')

operations()

function operations() {
  inquirer.prompt([{
    type: 'list',
    name: 'actions',
    message: 'O que você deseja fazer?',
    choices: [
      'Criar conta',
      'Consultar Saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }])
  .then((answer) => {
    const {actions} = answer;

    console.log('actions ==>', actions);
  })
  .catch((err) => {
    console.log('err ==>', err);
  })
}