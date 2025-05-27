import { StartsWith } from '../src/advancedTypes';

describe('StartsWith', () => {
  test('should check string prefix', () => {
    type Result1 = StartsWith<'hello', 'he'>; // true
    type Result2 = StartsWith<'hello', 'x'>; // false
    const result: Result1 = true;
    expect(result).toBe(true);
  });
});