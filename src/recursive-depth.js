const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    // if (Array.isArray(arr)) {
    //   count++;
    // }
    let max = 0;
    arr.forEach(elem => {
      if (Array.isArray(elem)) {

        // console.log(count, elem);
        let newMax = this.calculateDepth(elem)
        if (max < newMax) {
          max = newMax;
        }
        // console.log();
      }
    });
    count += max;
    return count;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};