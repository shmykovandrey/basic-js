const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  allData: [],
  getLength() {
    return this.allData.length;
  },
  addLink(value) {
    this.allData.push(value);
    return this

  },
  removeLink(position) {
    if (position >= this.allData.length || position <= 0 || (typeof position != 'number')) {
      this.allData = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.allData.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.allData.reverse();
    return this
  },
  finishChain() {
    let arr = this.allData.map(elem => `( ${elem} )`).join('~~');
    this.allData = [];
    return arr;
  }
};

module.exports = {
  chainMaker
};