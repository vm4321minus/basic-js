const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position !== "number" || position > this.arr.length || position <= 0) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this

  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res

  }
};

module.exports = {
  chainMaker
};
