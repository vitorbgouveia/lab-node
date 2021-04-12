console.error(new Error('Message'));

const cars = ['GM', 'FIAT', 'FORD', 'Honda'];

console.table(cars);

console.count('OI');
console.count('OI');
console.countReset('OI');
console.count('OI');
console.count('OI');
console.count('OI3');

console.time('Time');

for (let i = 0; i < 1000; i++) {
  // console.log('asdasd');
}

console.timeEnd('Time');

console.assert(true, 'NO VIEW');
console.assert(undefined | false | '' | null| NaN, 'VIEW');
// console.clear();