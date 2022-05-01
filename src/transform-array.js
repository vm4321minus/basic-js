const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let arr1 = [];
  let arr2 = [...arr];

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == '--discard-next') {
      arr2[i + 1] = '--kl';
    }
    else if (arr2[i] == '--discard-prev') {
      if (arr2[i - 1] != '--kl' && arr2[i - 1] !== undefined) {
        arr1.pop();
      }
    }
    else if (arr2[i] == '--double-next') {
      if (arr2[i + 1] != undefined) {
        arr1.push(arr2[i + 1])
      }
    }
    else if (arr2[i] == '--double-prev') {
      if (arr2[i - 1] != undefined && arr2[i - 1] != '--kl') {
        arr1.push(arr2[i - 1]);
      }
    }
    else {
      if (arr2[i] != '--kl') {
        arr1.push(arr2[i]);
      }

    }
  }
  return arr1;
}

module.exports = {
  transform
};
