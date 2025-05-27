import { once } from '../../src/utils/once';

describe('once', () => {
  test('should call function only once', () => {
    let count = 0;
    const fn = once(() => count++);
    fn();
    fn();
    expect(count).toBe(1);
  });
});