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
  let res = 0;
  const arr = Array.from(n.toString());
  for (let i = 0; i < arr.length; i++) {
    let value = Array.from(arr);
    value.splice(i, 1);
    value = Number(value.join(''));
    if (value > res) res = value;
  }
  return res;
}

module.exports = {
  deleteDigit
};
