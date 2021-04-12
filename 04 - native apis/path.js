const path = require('path');

console.log('baseName', path.basename('/home/documents/node'));
console.log('Join', path.join('/home', 'vitor', 'Documentos', '..'));
console.log('Resolve', path.resolve('test.js'));
console.log('Extension', path.extname ('test.js'));
console.log(__filename);
console.log(path.extname(__filename));
console.log(path.resolve(__filename));
console.log(path.basename(__filename));
