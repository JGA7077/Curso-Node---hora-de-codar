const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log('args ==>', args);

const nome = args['nome'];
const profissao = args['profissao'] || 'não informada';

console.log(`Nome informado: ${nome}, com a profissão: ${profissao}`);