import { MyOmit } from '../../src/types/MyOmit';

describe('MyOmit', () => {
  test('should omit specified properties', () => {
    type User = { name: string; age: number };
    const user: MyOmit<User, 'age'> = { name: 'Alice' };
    expect(user).toBeDefined();
    // @ts-expect-error - Проверяем ошибку типов
    user.age = 30;
  });
});