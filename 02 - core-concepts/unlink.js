const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
  if (err) {
    throw err;
  }

  console.log('DATA', data);
  fs.unlink('file.txt');
});

