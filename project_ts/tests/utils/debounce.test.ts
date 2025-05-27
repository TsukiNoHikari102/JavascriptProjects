import { debounce } from '../../src/utils/debounce';

describe('debounce', () => {
  test('should delay function execution', async () => {
    let count = 0;
    const fn = debounce(() => count++, 100);
    fn();
    fn();
    expect(count).toBe(0);
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(count).toBe(1);
  });
});