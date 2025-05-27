/**
 * Asserts that a value is non-nullable.
 * @template T The type of the value
 * @param value The value to check
 */
export function assertNotNull<T>(value: T): asserts value is NonNullable<T> {
  if (value == null) {
    throw new Error('Value is null or undefined');
  }
}