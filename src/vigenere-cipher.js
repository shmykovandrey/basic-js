const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!!message == false || !!key == false) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let vigenerMatrix = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arrAlphabet = alphabet.split('');
    for (let i = 0; i < alphabet.length; i++) {
      vigenerMatrix.push(arrAlphabet.join(''));
      let char = arrAlphabet.shift();
      arrAlphabet.push(char);
    }
    while (key.length < message.length) {
      key = key + key;
    }
    message.split('').forEach((elem, index) => {
      if (vigenerMatrix[0].indexOf(elem) == -1) {
        key = key.split('')
        key.splice(index, 0, elem)
        key = key.join('');
      }
    })
    key = key.substr(0, message.length)
    // console.log('message = ' + message)
    // console.log('key = ' + key);
    let cipherStr = '';
    for (let i = 0; i < key.length; i++) {
      if (vigenerMatrix[0].indexOf(message[i]) == -1) {
        cipherStr += message[i];
      } else if (vigenerMatrix[0].indexOf(key[i]) !== -1) {
        cipherStr += vigenerMatrix[vigenerMatrix[0].indexOf(key[i])][vigenerMatrix[0].indexOf(message[i])];
      }
    }
    // console.log(cipherStr.toUpperCase())
    return (this.direct) ? cipherStr.toUpperCase() : cipherStr.split('').reverse().join('').toUpperCase()
  }
  decrypt(message, key) {
    if (!!message == false || !!key == false) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let vigenerMatrix = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arrAlphabet = alphabet.split('');
    for (let i = 0; i < alphabet.length; i++) {
      vigenerMatrix.push(arrAlphabet.join(''));
      let char = arrAlphabet.shift();
      arrAlphabet.push(char);
    }
    while (key.length < message.length) {
      key = key + key;
    }
    message.split('').forEach((elem, index) => {
      if (vigenerMatrix[0].indexOf(elem) == -1) {
        key = key.split('')
        key.splice(index, 0, elem)
        key = key.join('');
      }
    })
    key = key.substr(0, message.length)
    // console.log('message = ' + message)
    // console.log('key = ' + key);
    let unCipherStr = '';
    for (let i = 0; i < key.length; i++) {
      if (vigenerMatrix[0].indexOf(message[i]) == -1) {
        unCipherStr += message[i];
      } else {
        let rowNum = vigenerMatrix[0].indexOf(key[i])
        let colNum = vigenerMatrix[rowNum].indexOf(message[i])
        unCipherStr += vigenerMatrix[0][colNum];
      }
    }
    // console.log('----------' + unCipherStr.toUpperCase());
    return (this.direct) ? unCipherStr.toUpperCase() : unCipherStr.split('').reverse().join('').toUpperCase()
  }
}

module.exports = {
  VigenereCipheringMachine
};