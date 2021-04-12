const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5));
console.log('Before read file');

const dados = fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.log('ERR', err);
    return;
  }

  console.log('DATA', data);
}); 

console.log('Execute log dados', dados);

console.log((process.hrtime()[0]/60).toFixed(5));