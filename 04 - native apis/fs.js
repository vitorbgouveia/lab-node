const fs = require('fs');

fs.readdir(__dirname, (err, data) => {
  if (err) {
    throw err;
  }

  data.forEach(files => {
    console.log(__dirname, files);
  });
});

fs.readFile('textFile.txt', (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data.toString());
  console.log(fs.readFileSync('textFile.txt'), 'AAAAA');
  const assets = ['create_dir_reall_time', 'css', 'js', 'images', 'fonts'];

  assets.forEach(asset => {
    fs.mkdirSync(asset , { recursive: true });
    fs.writeFileSync(`${__dirname}/${asset}/writeFilteText.txt`, 'File text');
  });

  assets.forEach(asset => {
    setTimeout(() => {
      fs.rmdirSync(asset, { recursive: true,  });
    }, 6000);
  })

});

