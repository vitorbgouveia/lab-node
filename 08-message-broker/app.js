require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const { wathMessageBrokers } = require('./brokers/init');

app.use(express.json());

app.use('/', routes);

app.listen(3000, () => {
  console.log(`Server running`);
  wathMessageBrokers();
});
