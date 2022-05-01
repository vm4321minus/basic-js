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
function repeater(str, { repeatTimes = 1, separator = "+", addition, additionRepeatTimes = 1, additionSeparator = "|" }) {
  let rs = str;

  if (addition === null) addition = "null"
  if (str === null) str = 'null'


  if (addition != undefined) {
    let ar1 = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      ar1.push(addition);
    }
    ar1 = ar1.join(additionSeparator)
    rs = str + ar1;
  }
  let ar2 = [];
  for (let i = 0; i < repeatTimes; i++) {
    ar2.push(rs);
  }
  ar2 = ar2.join(separator);
  return ar2;

}


module.exports = {
  repeater
};
