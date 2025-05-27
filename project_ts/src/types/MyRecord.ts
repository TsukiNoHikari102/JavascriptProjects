/**
 * Creates an object type with specified keys and value type.
 * @template K The type of keys
 * @template V The type of values
 */
export type MyRecord<K extends string | number | symbol, V> = { [P in K]: V };