/**
 * Checks if a string starts with a given prefix.
 * @template S The string to check
 * @template P The prefix to match
 */
export type StartsWith<S extends string, P extends string> = S extends `${P}${string}` ? true : false;