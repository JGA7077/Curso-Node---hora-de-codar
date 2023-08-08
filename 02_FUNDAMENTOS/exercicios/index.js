const inquirer = require('inquirer');
const chalk = require('chalk');

try {
  inquirer
  .prompt([
    {
      name: 'nameQuestion',
      message: 'Qual o seu nome?'
    },
    {
      name: 'ageQuestion',
      message: 'Qual a sua idade?'
    }
  ])
  .then(result => {
    console.log(chalk.bgYellow.black(`Olá, seu nome é ${result.nameQuestion} e tem ${result.ageQuestion} anos!`))
  })
  .catch(err => console.log('error from inquirer catch ==>', err))
} catch (error) {
  console.log('error from try/catch==>', error);
}
