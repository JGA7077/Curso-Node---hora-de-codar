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
      'Criar Conta',
      'Consultar Saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }])
  .then((answer) => {
    const { actions } = answer;

    switch (actions) {
      case 'Criar Conta':
        createAccount();
        break;
    
      default:
        break;
    }
  })
  .catch((err) => {
    console.log('err ==>', err);
  })
}

// create an account
function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolha o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));
}