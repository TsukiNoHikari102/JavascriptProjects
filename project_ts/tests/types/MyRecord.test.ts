import { MyRecord } from '../../src/types/MyRecord';

describe('MyRecord', () => {
  test('should create record with specified keys', () => {
    type Keys = 'a' | 'b';
    const record: MyRecord<Keys, number> = { a: 1, b: 2 };
    expect(record).toBeDefined();
    // @ts-expect-error - Проверяем ошибку типов
    record.c = 3;
  });
});