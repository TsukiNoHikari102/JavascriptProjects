import { MyPick } from '../../src/types/MyPick';

describe('MyPick', () => {
  test('should pick specified properties', () => {
    type User = { name: string; age: number };
    const user: MyPick<User, 'name'> = { name: 'Alice' };
    expect(user).toBeDefined();
    // @ts-expect-error - Проверяем ошибку типов
    user.age = 30;
  });
});