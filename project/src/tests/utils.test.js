import { debounce } from '../utils/debounce.js';
import { clone } from '../utils/clone.js';
import { deepEqual } from '../utils/deepEqual.js';

describe('utils', () => {
  it('clone creates deep copy', () => { const o={a:1}; const c=clone(o); expect(c).not.toBe(o); expect(c).toEqual(o); });
  it('deepEqual compares', () => { expect(deepEqual({a:1},{a:1})).toBe(true); });
});