const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log('date: ' + (date instanceof Date) + ' nan: ' + !isNaN(date.valueOf()))
  // console.log('full ' + )
  // console.log(date);
  // console.log(!!date);
  if (!!date == false) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');

  }

  let month = date.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1: {
      return 'winter';
      break;
    }
    case 2:
    case 3:
    case 4: {
      return 'spring';
      break;
    }
    case 5:
    case 6:
    case 7: {
      return 'summer';
      break;
    }
    case 8:
    case 9:
    case 10: {
      return 'fall';
      break;
    }

  }
  return 'Unable to determine the time of year!';
}

module.exports = {
  getSeason
};