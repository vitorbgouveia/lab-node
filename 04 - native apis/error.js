const execute = () => {
  const executeTo = () => {
    throw new Error('ErrorTo');
  }

  executeTo();
}

try {
  execute()
} catch (error) {
  console.log(error);
}

console.log('ok');

const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const validObject = (obj) => {
  typeof obj === 'object'
    ? console.log('Is object')
    : emitter.emit('Error', new Error('Not Object'));
}

emitter.addListener('Error', err => {
  console.log('Event: ', err.message);
});

validObject('asd')