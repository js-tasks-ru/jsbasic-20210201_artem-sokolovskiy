/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');
  newArr = arr.map(function (word, index) {
    if (index > 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    } 
    return word;
  }  )
  let newStr = newArr.join('');
  return newStr;
}
