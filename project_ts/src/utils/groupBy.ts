/**
 * Groups an array by a specified key.
 * @template T The type of array elements
 * @param array The array to group
 * @param key The key to group by
 * @returns A record with string keys and arrays of T
 */
export function groupBy<T>(array: readonly T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    groups[groupKey] = groups[groupKey] || [];
    groups[groupKey].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}