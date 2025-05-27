/**
 * Picks specified properties from an object type.
 * @template T The source object type
 * @template K The keys to pick
 */
export type MyPick<T, K extends keyof T> = { [P in K]: T[P] };