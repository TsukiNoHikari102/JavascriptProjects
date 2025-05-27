import { MyPartial } from '../../src/types/MyPartial';

describe('MyPartial', () => {
  test('should make properties optional', () => {
    type User = { name: string; age: number };
    const user: MyPartial<User> = { name: 'Alice' };
    expect(user).toBeDefined();
  });
});