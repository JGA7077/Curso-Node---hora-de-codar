const fs = require('fs')

console.log('Início');

fs.writeFileSync('arquivo.txt', 'opa')

console.log('fim');