const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.hasOwnProperty('repeatTimes') || (options.repeatTimes = 1);

  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.hasOwnProperty('addition') ? (options.additionRepeatTimes = 1) : (options.additionRepeatTimes = 0);
  }
  options.hasOwnProperty('addition') || (options.addition = '');
  options.hasOwnProperty('additionSeparator') || (options.additionSeparator = '|');
  options.hasOwnProperty('separator') || (options.separator = '+');
  let newStr = '';
  if (Object.keys(options).length == 0) {
    return str;
  } else if (options.repeatTimes == 0) {
    return str;
  } else {
    for (let i = 1; i <= options.repeatTimes; i++) {
      newStr = newStr + str;
      if (options.additionRepeatTimes > 0) {
        for (let j = 1; j <= options.additionRepeatTimes; j++) {
          newStr += options.addition;
          if (j < options.additionRepeatTimes) newStr += options.additionSeparator;
        }
      }
      if (i < options.repeatTimes) newStr += options.separator;
    }
  }
  return newStr;
}

module.exports = {
  repeater
};