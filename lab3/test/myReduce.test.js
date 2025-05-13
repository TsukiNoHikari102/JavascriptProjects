const myReduce = require('../src/myReduce');

describe('myReduce', () => {
    test('считает сумму чисел с initialValue', () => {
      const result = myReduce([1, 2, 3], (acc, val) => acc + val, 0);
      expect(result).toBe(6);
    });
  
    test('считает сумму чисел без initialValue', () => {
      const result = myReduce([1, 2, 3], (acc, val) => acc + val);
      expect(result).toBe(6);
    });
  
    test('преобразует массив в объект', () => {
      const arr = ['a', 'b', 'c'];
      const result = myReduce(arr, (acc, val, idx) => {
        acc[val] = idx;
        return acc;
      }, {});
      expect(result).toEqual({ a: 0, b: 1, c: 2 });
    });
  
    test('бросает ошибку, если первый аргумент не массив', () => {
      expect(() => {
        myReduce(123, () => {});
      }).toThrow(TypeError);
    });
  
    test('бросает ошибку, если второй аргумент не функция', () => {
      expect(() => {
        myReduce([1, 2, 3], null);
      }).toThrow(TypeError);
    });
  });

  module.exports = myReduce;