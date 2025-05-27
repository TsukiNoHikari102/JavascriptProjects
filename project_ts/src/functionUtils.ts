/**
 * Composes functions from left to right.
 */
export function pipe<A, B>(f: (a: A) => B): (a: A) => B;
export function pipe<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C;
export function pipe<A, B, C, D>(f: (a: A) => B, g: (b: B) => C, h: (c: C) => D): (a: A) => D;
export function pipe(...fns: ((arg: unknown) => unknown)[]): (arg: unknown) => unknown {
  return (arg: unknown) => fns.reduce((value, fn) => fn(value), arg);
}