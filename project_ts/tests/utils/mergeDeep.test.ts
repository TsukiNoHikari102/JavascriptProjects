import { mergeDeep } from '../../src/utils/mergeDeep';

describe('mergeDeep', () => {
  test('should merge objects deeply', () => {
    const a = { x: 1, y: { z: 2 } };
    const b = { y: { w: 3 }, v: 4 };
    const result = mergeDeep(a, b);
    expect(result).toEqual({ x: 1, y: { z: 2, w: 3 }, v: 4 });
  });
  test('should fail on incompatible types', () => {
    type TestType = { a: string };
    type IncompatibleType = { a: number };
    mergeDeep<TestType, IncompatibleType>({ a: 'string' }, { a: 123 });
  });
});