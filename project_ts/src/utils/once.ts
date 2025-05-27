/**
 * Ensures a function is called only once.
 * @template F The function type to wrap
 * @param fn The function to call once
 * @returns A function that executes once and returns the cached result
 */
export function once<F extends (...args: any[]) => any>(fn: F): F {
  let called = false;
  let result: ReturnType<F>;
  return function (this: unknown, ...args: Parameters<F>) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  } as F;
}