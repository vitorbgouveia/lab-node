const http = require('http');
const { readFile } = require('fs');

const hostName = '127.0.0.1';
const port = 3000;
const port2 = 3001;
const url = `http://${hostName}:${port}/`;
const url2 = `http://${hostName}:${port2}/`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Bem vindo <br/> NodeJS</h1>');
})

server.listen(port, hostName, () => {
  console.log('Server running', url);
});

const commandOpen = {
  'darwin': 'open',
  'win32': 'start',
};

require('child_process')
  .exec(`${commandOpen[process.platform] ?? 'xdg-open'} ${url}`);

let content = '';

readFile('index.html', (err, data) => {
  if (err) {
    throw err;
  }
  content = data;
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content);
})

server2.listen(port2, hostName, () => {
  console.log(`Running server2 on port ${port2}` );
});

require('child_process')
  .exec(`${commandOpen[process.platform] ?? 'xdg-open'} ${url2}`);