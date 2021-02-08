/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str === '') return str;
  else {
    str = str.replace(str[0], str[0].toUpperCase());
    return str;
  }
}
