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
    console.log(value);
    this.allData.push(value);

  },
  removeLink(position) {
    if (position >= this.allData.length || (typeof position != 'number')) {
      throw new Error('You can\'t remove incorrect link!');
    }
    this.allData.splice(position, 1);
  },
  reverseChain() {
    console.log(this.allData)
    this.allData.reverse();
  },
  finishChain() {
    return this.allData.forEach(elem => `( ${elem} )`).join('~~');
  }
};

module.exports = {
  chainMaker
};