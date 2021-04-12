const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);
const content = 'Create file with promisfy and fs';

writeFile('textFilePromisify.txt', content)
  .then(() => {
    console.log('Sucess create file');
    setTimeout(() => {
      fs.unlinkSync('textFilePromisify.txt')
    }, 3000)

  })
  .catch(err => console.log(err) );

const createFile = (name, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(name, content, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

createFile('createFile2.txt', 'Create file 2 with promises')
  .then(() => {
    console.log('Sucess create file 2');
    setTimeout(() => fs.unlinkSync('createFile2.txt'), 4000 );
  })
  .catch(err => console.log(err) );

const fsWithPromises = require('fs').promises;

const readFile = async () => {
  const data = await fsWithPromises.readFile('textFile.txt', 'binary');
  return new Buffer.from(data);
}

try {
  readFile()
    .then(data => console.log(data.toString()) )
} catch (error) {
  console.log(error);
}