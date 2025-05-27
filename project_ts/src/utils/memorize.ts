/**
 * Returns a memoized version of a function.
 * @template F The function type to memoize
 * @param fn The function to memoize
 * @returns A memoized function with the same signature as the input
 */
export function memorize<F extends (...args: any[]) => any>(fn: F): F {
  const cache = new Map<string, ReturnType<F>>();
  return function (...args: Parameters<F>) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  } as F;
}