import { isEqual } from '../../src/utils/isEqual';

describe('isEqual', () => {
  test('should compare objects deeply', () => {
    const a = { x: 1, y: { z: 2 } };
    const b = { x: 1, y: { z: 2 } };
    expect(isEqual(a, b)).toBe(true);
    expect(isEqual(a, { x: 1 })).toBe(false);
  });
});