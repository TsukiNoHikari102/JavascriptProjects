/**
 * Omits specified properties from an object type.
 * @template T The source object type
 * @template K The keys to omit
 */
export type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };