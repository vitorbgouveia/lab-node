const soma = (value, resultSoma) => {
  return setTimeout(() => {
    return resultSoma(null, value + 3000);
  }, 3000);
}

soma(270, (err, value) => {
  console.log(err);
  console.log(value);
})