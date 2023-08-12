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
        deposit()
        break;
      case 'Consultar Saldo':
        getAccountBalance();
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

// add an amount to user account
function deposit() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta?'
    }
  ])
  .then((answer) => {
    const {accountName} = answer

    // verify if account exists
    if (!checkAccount(accountName)) {
      return deposit();
    }

    inquirer.prompt([
      {
        name: 'amount',
        message: 'Quanto você deseja depositar?'
      }
    ])
    .then((amountAnswer) => {
      const {amount} = amountAnswer;

      // add an amount
      addAmount(accountName, amount);

      operations();
    })
  })
  .catch((err) => {
    console.log('err ==>', err);
  })
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'));
    return false;
  }

  return true;
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'));
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => {
      console.log('err ==>', err);
    }
  );

  console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`));
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf-8',
    flag: 'r'
  })

  return JSON.parse(accountJSON)
}

// show account balance
function getAccountBalance() {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
  .then((answer) => {
    const {accountName} = answer;

    // verify if account exists
    if (!checkAccount(accountName)) {
      return getAccountBalance()
    }

    const accountData = getAccount(accountName);

    console.log(chalk.bgBlue.black(
      `Olá, o saldo da sua conta é de R$${accountData.balance}`
    ));

    operations();
  })
  .catch((err) => {
    console.log('err ==>', err);
  })
}