const events = require('events');

class Evento extends events.EventEmitter {}
const meuEvento = new Evento();

// Subscriber
meuEvento.on('seguranca', (x, y) => {
  console.log('Executando evento', x, y);
});
 
// Publisher
meuEvento.emit('seguranca', 'userAdmin', 'Alterou salario');

meuEvento.on('END', (data) => {
  console.log('off', data);
});

meuEvento.emit('END', { ok: 123 });