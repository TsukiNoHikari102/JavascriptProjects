import { createEventEmitter } from '../../src/utils/createEventEmitter';

describe('createEventEmitter', () => {
  test('should emit and handle events', () => {
    const emitter = createEventEmitter<'test'>();
    let value: string | undefined;
    emitter.on('test', (data: unknown) => {
      value = data as string;
    });
    emitter.emit('test', 'hello');
    expect(value).toBe('hello');
  });

  test('should restrict event names', () => {
    const emitter = createEventEmitter<'test'>();
    // @ts-expect-error - Expect type error for invalid event name
    emitter.on('invalid', () => {});
  });
});