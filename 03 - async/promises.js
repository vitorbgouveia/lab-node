const soma = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 3000);
    }, 3000);
  });
}

soma(350)
  .then(result => console.log(result) )
