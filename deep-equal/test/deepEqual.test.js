const deepEqual = require('../src/deepEqual');

describe('deepEqual', () => {
  test('Примитивы равны', () => 
  {
    expect(deepEqual(1, 1)).toBe(true);
  });

  test('Примитивы не равны', () => 
  {
    expect(deepEqual(1, 2)).toBe(false);
  });

  test('Oбъекты равны', () => 
  {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('Объекты с разным количеством ключей не равны', () => 
  {
    const obj1 = { a: 1 };
    const obj2 = { a: 1, b: 2 };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('Объекты не равны', () => 
  {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('Сравнение null и объекта (не равны)', () => 
  {
    expect(deepEqual(null, {})).toBe(false);
  });

  test('Сравнение массивов (равны)', () => 
  {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('Сравнение массивов с объектами (равны)', () => 
  {
    const arr1 = [{ a: 1 }, { b: 2 }];
    const arr2 = [{ a: 1 }, { b: 2 }];
    expect(deepEqual(arr1, arr2)).toBe(true);
  });

  test('', () =>
  {
    expect(deepEqual([0, 1], {0: 0, 1: 1})).toBe(false);
  });
});