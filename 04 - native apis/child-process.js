const { spawn } = require('child_process');
const ls = spawn('ls', ['..', '-lh']);

 ls.stdout.on('data', data => console.log(`stdout ${data}`) );

ls.stderr.on('err', data => console.log('stderr', data) );

ls.on('close', code => console.log('Show', code) );