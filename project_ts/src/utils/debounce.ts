/**
 * Returns a debounced version of a function.
 * @template F The function type to debounce
 * @param fn The function to debounce
 * @param delay The delay in milliseconds
 * @returns A debounced function with the same signature as the input
 */
export function debounce<F extends (...args: any[]) => any>(fn: F, delay: number): F {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: unknown, ...args: Parameters<F>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  } as F;
}