import { assertNotNull } from '../src/assertions';

describe('assertNotNull', () => {
  test('should assert non-nullable values', () => {
    const value: string | null = 'test';
    assertNotNull(value);
    expect(value).toBe('test'); // TypeScript знает, что value не null
  });
  test('should throw on null', () => {
    expect(() => assertNotNull(null)).toThrow('Value is null or undefined');
  });
});