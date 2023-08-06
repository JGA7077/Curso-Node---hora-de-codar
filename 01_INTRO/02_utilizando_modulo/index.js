const fs = require('fs'); // file system

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('err ==>', err);

    return;
  }

  console.log('data ==>', data);
})