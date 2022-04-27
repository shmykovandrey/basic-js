const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  allData: new Array,
  getLength() {
    console.log('getLenght ' + this.allData);
    return this.arr.length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    console.log(chainMaker.allData);
    // if (typeof value !== 'number'){
    //   throw
    // }
    console.log('addLink ' + this.allData + ' ' + value);
    this.allData.push(value);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    console.log('remove ' + this.arr + ' ' + position);
    if (position >= this.arr.length || (typeof position != 'number')) {
      throw new Error('You can\'t remove incorrect link!')
    }
    this.arr.splice(position, 1);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    return this.allData.forEach(elem => `( ${elem} )`).join('~~');
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};