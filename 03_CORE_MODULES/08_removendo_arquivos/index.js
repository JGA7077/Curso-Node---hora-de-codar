const fs = require('fs');

fs.unlink('arquivo.txt', (err) => {
  if (err) {
    console.log('err ==>', err);
    return;
  }

  console.log('arquivo removido!');
})