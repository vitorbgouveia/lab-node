const { rabbitMQ } = require('./rabbtimq');
const { kafka } = require('./kakfa');
const { RABBITMQ_EXCHANGE, KAFKA_TOPIC } = process.env;

const wathMessageBrokers = () => {
  rabbitMQ.watchMessage(RABBITMQ_EXCHANGE);
  rabbitMQ.watchMessage(RABBITMQ_EXCHANGE);

  kafka.watchMessage(KAFKA_TOPIC);
  kafka.watchMessage(KAFKA_TOPIC);
};

module.exports = {
  wathMessageBrokers,
}
