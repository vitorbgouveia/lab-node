const soma = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value !== 'number' || value < 0) {
        reject('Não deu certo');
      }

      resolve(value + 3000);
    }, 3000);
  });
}

async function main() {
  try {
    console.log(await soma('asdadasd'));
  } catch (error) {
    console.log(error);
    console.log(process.env.USERNAME);
  }
}
main();

soma(-52)
  .then(result => console.log(result) )
  .catch(err => console.log('789', err) )
