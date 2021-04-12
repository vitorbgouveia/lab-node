const path = require('path');

console.log(`Exec ${path.basename(__filename)}`);

const invisible = () => {
  console.log('Invisible Function');
}

const execute = () => {
  console.log('Exec function');
}

const welcome = 'Hi';

module.exports = { invisible, execute, welcome };