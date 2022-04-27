const {
  NotImplementedError
} = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = arr.map(a => a);
  console.log(newArr)
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == 'empty') {
      continue;
    }
    if (newArr[i] == '--discard-next') {
      if (i == (newArr.length - 1)) {
        newArr[i] = 'empty';
        continue;
      }
      newArr[i] = 'empty';
      newArr[i + 1] = 'empty';
    }
    if (newArr[i] == '--discard-prev') {
      if (i == 0) {
        newArr[i] = 'empty';
        continue;
      }
      newArr[i] = 'empty';
      newArr[i - 1] = 'empty';
    }
    if (newArr[i] == '--double-next') {
      if (i == (newArr.length - 1)) {
        newArr[i] = 'empty';
        continue;
      }
      newArr[i] = newArr[i + 1];
      continue;
    }
    if (newArr[i] == '--double-prev') {
      if (i == 0) {
        newArr[i] = 'empty';
        continue;
      }
      newArr[i] = newArr[i - 1];
      continue;
    }
  }
  return (newArr.filter(elem => (elem != 'empty')));
}

//throw new NotImplementedError('Not implemented');
// remove line with error and write your code here


module.exports = {
  transform
};