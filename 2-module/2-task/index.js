/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  if (Object.getOwnPropertyNames(obj).length > 0) return false;
  else {
    return true;
  }
}
