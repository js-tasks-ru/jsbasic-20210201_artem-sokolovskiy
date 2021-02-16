/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let array = str.replace(/[^+.\d-]/g, ' ').split(' ')//убираю все буквы и ненужные знаки. Превращаю в массив
  let filteredArray = array.filter(item => item!='');//убираю все пустые элементы массива
  convertToNumberArray = filteredArray.map(item => item = parseFloat(item))//превращаю все элементы из строк в числа
  sortArray = convertToNumberArray.sort((a, b) => a - b);//сортирую числа от минимального до максимального
  let obj = {};
  obj.min = sortArray[0];
  obj.max = sortArray[sortArray.length - 1]; 
  return obj;
  /*слабое место программы - это то, что отдельно стоящие символы "+" и "-"
  не исключаются. Не могу понять как их отсеять. в некоторых случаях они могут 
  попасть в начало или конец массива
  */
}
