
const amqp = require('amqplib/callback_api');
const { RABBITMQ_CONNECTION_STRING: connectionString } = process.env;

const rabbitMQ = {
  watchMessage: (exchange) => {
    amqp.connect(connectionString, (error0, connection) => {
      if (error0) { throw error0; }
      connection.createChannel((error1, channel) => {
        if (error1) { throw error1; }

        channel.assertExchange(exchange, 'fanout', { durable: false });

        const queueNumber = (Math.random() * 1000).toFixed();

        channel.assertQueue('', { exclusive: true }, (error2, q) => {
          if (error2) { throw error2; }
          console.log(" [*] Waiting for messages rabbitMQ", q.queue, queueNumber);
          channel.bindQueue(q.queue, exchange, '');

          channel.consume(q.queue, (msg) => {
            console.log(' [*] Recived rabbitMQ', queueNumber, msg.content.toString());
          }, { noAck: true });
        });
      });
    });
  },
  sendMessage: (exchange, msg) => {
    amqp.connect(connectionString, (error0, connection) => {
      if (error0) { throw error0; }
  
      connection.createChannel((error1, channel) => {
        if (error1) { throw error1; }
  
        channel.publish(exchange, '', Buffer.from(JSON.stringify(msg)));
        console.log(" [x] Send message to rabbitMQ %s", msg);
      });
  
      setTimeout(() => {
        connection.close();
      }, 500);
    });
  },
};

module.exports = {
  rabbitMQ,
};