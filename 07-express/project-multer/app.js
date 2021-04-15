const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.post('/upload', upload.single('file'), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const err = new Error('File not found');
    err.httpStatusCode = 400;
    return next(err);
  }

  res.send(file);
});


app.listen(3000, () => {
  console.log('Running server test multer');
});