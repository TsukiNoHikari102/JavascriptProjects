import { groupBy } from '../../src/utils/groupBy';

describe('groupBy', () => {
  test('should group array by key', () => {
    const arr = [{ id: 1, name: 'A' }, { id: 1, name: 'B' }, { id: 2, name: 'C' }];
    const result = groupBy(arr, 'id');
    expect(result['1']).toEqual([{ id: 1, name: 'A' }, { id: 1, name: 'B' }]);
    expect(result['2']).toEqual([{ id: 2, name: 'C' }]);
  });
  test('should not allow invalid keys', () => {
    const arr = [{ id: 1, name: 'A' }];
    // @ts-expect-error - Проверяем ошибку типов
    groupBy(arr, 'invalidKey');
  });
});