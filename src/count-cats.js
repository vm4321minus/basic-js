const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mrx) {
  let count = 0;
  for (let i = 0; i < mrx.length; i++) {
    count += mrx[i].filter(x => x == '^^').length;
  }
  return count;
}

module.exports = {
  countCats
};
