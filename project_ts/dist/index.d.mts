/**
 * Deeply clones an object, preserving its type.
 * @template T The type of the object to clone
 * @param obj The object to clone
 * @returns A deep copy of the object
 */
declare function deepClone<T>(obj: T): T;

/**
 * Returns a debounced version of a function.
 * @template F The function type to debounce
 * @param fn The function to debounce
 * @param delay The delay in milliseconds
 * @returns A debounced function with the same signature as the input
 */
declare function debounce<F extends (...args: any[]) => any>(fn: F, delay: number): F;

/**
 * Returns a memoized version of a function.
 * @template F The function type to memoize
 * @param fn The function to memoize
 * @returns A memoized function with the same signature as the input
 */
declare function memorize<F extends (...args: any[]) => any>(fn: F): F;

/**
 * Groups an array by a specified key.
 * @template T The type of array elements
 * @param array The array to group
 * @param key The key to group by
 * @returns A record with string keys and arrays of T
 */
declare function groupBy<T>(array: readonly T[], key: keyof T): Record<string, T[]>;

/**
 * Deeply merges two objects.
 * @template A The type of the first object
 * @template B The type of the second object
 * @param a The first object
 * @param b The second object
 * @returns A deeply merged object of type A & B
 */
declare function mergeDeep<A extends object, B extends object>(a: A, b: B): A & B;

/**
 * Ensures a function is called only once.
 * @template F The function type to wrap
 * @param fn The function to call once
 * @returns A function that executes once and returns the cached result
 */
declare function once<F extends (...args: any[]) => any>(fn: F): F;

/**
 * Checks if two values are deeply equal.
 * @param a The first value
 * @param b The second value
 * @returns True if the values are equal, false otherwise
 */
declare function isEqual(a: unknown, b: unknown): boolean;

/**
 * Creates an event emitter for specified event names.
 * @template T The union type of event names
 * @returns An object with on, emit, and off methods
 */
declare function createEventEmitter<T extends string>(): {
    on(event: T, listener: (data: unknown) => void): void;
    emit(event: T, data: unknown): void;
    off(event: T, listener: (data: unknown) => void): void;
};

/**
 * Makes all properties of an object optional.
 * @template T The type to make partial
 */
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Makes all properties of an object readonly.
 * @template T The type to make readonly
 */
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * Picks specified properties from an object type.
 * @template T The source object type
 * @template K The keys to pick
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Omits specified properties from an object type.
 * @template T The source object type
 * @template K The keys to omit
 */
type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

/**
 * Creates an object type with specified keys and value type.
 * @template K The type of keys
 * @template V The type of values
 */
type MyRecord<K extends string | number | symbol, V> = {
    [P in K]: V;
};

/**
 * Checks if a string starts with a given prefix.
 * @template S The string to check
 * @template P The prefix to match
 */
type StartsWith<S extends string, P extends string> = S extends `${P}${string}` ? true : false;

/**
 * Asserts that a value is non-nullable.
 * @template T The type of the value
 * @param value The value to check
 */
declare function assertNotNull<T>(value: T): asserts value is NonNullable<T>;

/**
 * Composes functions from left to right.
 */
declare function pipe<A, B>(f: (a: A) => B): (a: A) => B;
declare function pipe<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C;
declare function pipe<A, B, C, D>(f: (a: A) => B, g: (b: B) => C, h: (c: C) => D): (a: A) => D;

export { type MyOmit, type MyPartial, type MyPick, type MyReadonly, type MyRecord, type StartsWith, assertNotNull, createEventEmitter, debounce, deepClone, groupBy, isEqual, memorize, mergeDeep, once, pipe };
