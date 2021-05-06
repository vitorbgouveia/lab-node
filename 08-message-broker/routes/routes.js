const express = require('express');
const router = express.Router();

const { rabbitMQ } = require('../brokers/rabbtimq');
const { kafka } = require('../brokers/kakfa');

router.get('/', (req, res) => {
  res.send('ok');
});

router.post('/rabbitmq', (req, res) => {
  const { exchange, message } = req.body;
  rabbitMQ.sendMessage(exchange, message);
});

router.post('/kafka', (req, res) => {
  const { topicName, message } = req.body;
  kafka.sendMessage(topicName, message);
});

module.exports = router;