const Buffer = require('buffer').Buffer;

const buf = Buffer.from('Test Buffer');

console.log(buf.toString());
console.log(buf.toString('utf16le'));

const bufString = Buffer.from('Buffer string', 'utf-8');

console.log(Buffer.isBuffer(bufString));
console.log(bufString.toString('utf-8', 0, 10));