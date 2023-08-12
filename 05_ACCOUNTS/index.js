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
      case 'Depositar':
        
        break;
      case 'Consultar Saldo':
        
        break;
      case 'Sacar':
        
        break;
      case 'Sair':
        console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'));
        process.exit();
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

  buildAccount();
}

function buildAccount() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Digite um nome para a sua conta:'
    }
  ])
  .then((answer) => {
    const {accountName} = answer;
    console.info(accountName);

    if (!fs.existsSync('accounts')) {
      fs.mkdirSync('accounts')
    }

    if (fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'));
      buildAccount();
      return;
    }

    fs.writeFileSync(
      `accounts/${accountName}.json`, 
      '{"balance": 0}', 
      (err) => {
        console.log('err ==>', err);
      }
    )

    console.log(chalk.green('Parabéns, a sua conta foi criada!'));
    operations();
  })
  .catch((err) => {
    console.log('err ==>', err);
  })
}