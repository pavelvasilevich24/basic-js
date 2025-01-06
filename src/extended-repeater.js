const { NotImplementedError } = require('../extensions/index.js');

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
  let res = [];
  let addition = [];
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';

  for (let i = 0; i < repeatTimes; i++) {
    res[i] = String(str);
  }
  if (String(options.addition) && typeof (options.addition) !== 'undefined') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addition[i] = String(options.addition);
    }
  }
  const addSeparator = addition.join(additionSeparator);
  return res.join(addSeparator + separator) + addSeparator;
}

module.exports = {
  repeater
};
