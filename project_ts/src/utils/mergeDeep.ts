/**
 * Deeply merges two objects.
 * @template A The type of the first object
 * @template B The type of the second object
 * @param a The first object
 * @param b The second object
 * @returns A deeply merged object of type A & B
 */
export function mergeDeep<A extends object, B extends object>(a: A, b: B): A & B {
  const result = { ...a } as A & B;
  for (const key in b) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      const bValue = b[key as keyof B];
      const aValue = (a as Record<string, unknown>)[key];

      if (
        key in a &&
        typeof aValue === 'object' &&
        aValue !== null &&
        typeof bValue === 'object' &&
        bValue !== null
      ) {
        (result as Record<string, unknown>)[key] = mergeDeep(
          aValue as object,
          bValue as object
        );
      } else {
        (result as Record<string, unknown>)[key] = bValue;
      }
    }
  }
  return result;
}