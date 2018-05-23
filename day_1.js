var yargs = require('yargs');
const argv = yargs.argv;

/**
 * Calculate sum of elements
 * Input is a number
 */
var sum = argv._[0].toString().split("").reduce((a, b) => { 
  return Number(a) + Number(b); 
}, 0);

/**
 * Check prime number
 * @param {*} value 
 */
function isPrime(value) {
  if (isNaN(value) || value < 2) {
    return false;
  } else if (value === 2) {
    return true;
  }

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }

    return true;
  }
}

console.log(isPrime(argv._[0]));