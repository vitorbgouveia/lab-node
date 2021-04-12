const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5));
console.log('Before read file');

const dados = fs.readFileSync('../files/devops.tar'); 

console.log('Execute log dados', dados);

console.log((process.hrtime()[0]/60).toFixed(5));