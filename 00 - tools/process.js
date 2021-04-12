require('./subDirectory/sub');
console.log('------------');
console.log('File name: ', __filename);
console.log('Dir name: ', __dirname);
console.log('Invoque dir: ', process.cwd());
console.log('Exec params: ', process.argv[3]);
console.log('Process: ', process.env);
process.exit();
console.log('Server: ', process.platform);
