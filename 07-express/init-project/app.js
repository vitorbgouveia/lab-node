const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Execute middleware');

  return next();
});

app.use('/', routes);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log(`Server running`);
})
