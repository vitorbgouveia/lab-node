const crypto = require('crypto');
const start = Date.now();

const logHashTime = () => {
  crypto.pbkdf2('a', 'b', 200000, 512, 'sha512', () => {
    console.log(`Hash: ${Date.now() - start}`);
  });
}

// execute all threads on thread pool
logHashTime();
logHashTime();
logHashTime();
logHashTime();
//  ------ await
logHashTime();