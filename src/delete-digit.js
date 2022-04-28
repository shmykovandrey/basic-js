const {
  NotImplementedError
} = require('../extensions/index.js');

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
  let max = 0;
  ('' + n).split('').forEach(elem => {
    return (n.toString().replace(elem, '') > max) && (max = n.toString().replace(elem, ''))
  });
  return +max;
}

module.exports = {
  deleteDigit
};