/**
 * Makes all properties of an object readonly.
 * @template T The type to make readonly
 */
export type MyReadonly<T> = { readonly [P in keyof T]: T[P] };