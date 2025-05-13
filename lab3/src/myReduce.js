function myReduce(array, callback, initialValue) {
    // Проверка, что array — это массив
    if (!Array.isArray(array)) 
    {
      throw new TypeError('Первый аргумент должен быть массивом');
    }
  
    // Проверка, что callback — это функция
    if (typeof callback !== 'function') 
    {
      throw new TypeError('Второй аргумент должен быть функцией');
    }
  
    // Используем начальное значение, если оно предоставлено
    let hasInitialValue = arguments.length >= 3;
    let accumulator = hasInitialValue ? initialValue : array[0];
    let startIndex = hasInitialValue ? 0 : 1;
  
    // Если начальное значение не указано
    if (accumulator === undefined) 
    {
      // Массив не должен быть пустым
      if (array.length === 0) 
      {
        throw new TypeError('Уменьшение пустого массива без начального значения');
      }
      // Первое значение массива становится аккумулятором
      accumulator = array[0];
      startIndex = 1;
    }
  
    // Проходим по массиву от startIndex
    for (let i = startIndex; i < array.length; i++) 
    {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }

  
module.exports = myReduce;