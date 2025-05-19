const myPromiseAll = require('../src/myPromiseAll');

function delay(value, ms) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

function rejectDelay(reason, ms) {
  return new Promise((_, reject) => setTimeout(() => reject(reason), ms));
}

describe('myPromiseAll', () => {
  test('should resolve with an array of results when all promises resolve', async () => {
    const promises = [
      delay(1, 50),
      delay(2, 30),
      delay(3, 10)
    ];
    const results = await myPromiseAll(promises);
    expect(results).toEqual([1, 2, 3]);
  });

  test('should reject with the reason of the first promise that rejects', async () => {
    const promises = [
      delay(1, 50),
      rejectDelay('error', 30),
      delay(3, 10)
    ];
    await expect(myPromiseAll(promises)).rejects.toBe('error');
  });

  test('should handle non-promise values', async () => {
    const promises = [
      1,
      delay(2, 10),
      'hello'
    ];
    const results = await myPromiseAll(promises);
    expect(results).toEqual([1, 2, 'hello']);
  });

  test('should resolve with an empty array for an empty iterable', async () => {
    const results = await myPromiseAll([]);
    expect(results).toEqual([]);
  });

  test('should reject with TypeError for non-iterable argument', async () => {
    await expect(myPromiseAll(null)).rejects.toBeInstanceOf(TypeError);
    await expect(myPromiseAll(42)).rejects.toBeInstanceOf(TypeError);
  });

  test('should maintain order of results regardless of resolution time', async () => {
    const promises = [
      delay(1, 100),
      delay(2, 50),
      delay(3, 10)
    ];
    const results = await myPromiseAll(promises);
    expect(results).toEqual([1, 2, 3]);
  });
});