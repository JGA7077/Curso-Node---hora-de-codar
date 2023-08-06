// módulo externo
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

// módulo interno
const sum = require('./sum').sum;

const firstNumber = parseInt(args['firstNumber']) || 0
const lastNumber = parseInt(args['lastNumber']) || 0

const sumResult = sum(firstNumber, lastNumber);

console.log('resultado sumResult ==>', sumResult);