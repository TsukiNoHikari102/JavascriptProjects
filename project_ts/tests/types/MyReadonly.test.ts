import { MyReadonly } from '../../src/types/MyReadonly';

describe('MyReadonly', () => {
  test('should make properties readonly', () => {
    type User = { name: string };
    const user: MyReadonly<User> = { name: 'Alice' };
    // @ts-expect-error - Проверяем ошибку типов
    user.name = 'Bob';
  });
});