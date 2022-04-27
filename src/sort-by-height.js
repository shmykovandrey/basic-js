const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) newArr.push(i);
  }
  arr = arr.filter(elem => elem !== -1).sort((a, b) => a - b);
  newArr.forEach(elem => {
    arr.splice(elem, 0, -1)
  })
  return arr;


  // return arr.sort((a, b) => {
  //   if (a == -1 || b == -1) {
  //     return 0
  //   } else {
  //     return a - b
  //   }
  // })
  //  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};