/**
 * Makes all properties of an object optional.
 * @template T The type to make partial
 */
export type MyPartial<T> = { [P in keyof T]?: T[P] };