import { memorize } from '../../src/utils/memorize';

describe('memoize', () => {
  test('should cache results', () => {
    let count = 0;
    const fn = memorize((x: number) => {
      count++;
      return x * 2;
    });
    expect(fn(5)).toBe(10);
    expect(count).toBe(1);
    expect(fn(5)).toBe(10);
    expect(count).toBe(1); // Функция не вызывалась повторно
  });
});