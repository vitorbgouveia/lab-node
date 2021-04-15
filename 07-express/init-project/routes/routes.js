const express = require('express');
const router = express.Router();

const logReq = (req, res, next) => {
  console.log('LOG routes');
  return next();
}

router.get('/', (req, res) => {
  res.send('ok');
});

router.get('/adm', (req, res, next) => {
  if ((Math.random() * 10).toFixed() > 5) {
    return next(new Error('Error test' + Math.random()));
  }

  res.send('adm');
});

router.get('/adm/:id', (req, res) => {
  res.send('adm with id' + req.params.id);
});

router.post('/adm', (req, res) => {
  const { body } = req;

  res.send('adm with POST \n' + JSON.stringify(body));
});

router.patch('/adm/:id', (req, res) => {
  res.send('adm with PATCH');
});

router.put('/adm/:id', (req, res) => {
  res.send('adm with PUT');
});

router.delete('/adm/:id', (req, res) => {
  res.send('adm with DELETE');
});

module.exports = router;