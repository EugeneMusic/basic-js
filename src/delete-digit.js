const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) { 
  n = String(n).split('');
  for (let i = 0; i < 10; i++) {
    if (n.indexOf(n[i]) !== -1) {
      n.splice(n.indexOf(n[i]), 1)
      return +n.join('')
    }
  }
  
}

module.exports = {
  deleteDigit
};
