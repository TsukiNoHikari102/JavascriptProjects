import { pipe } from '../src/functionUtils';

describe('pipe', () => {
  test('should compose functions', () => {
    const addOne = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const composed = pipe(addOne, double);
    expect(composed(2)).toBe(6); // (2 + 1) * 2
  });
});