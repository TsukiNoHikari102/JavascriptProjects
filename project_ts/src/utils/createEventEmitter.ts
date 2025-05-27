/**
 * Creates an event emitter for specified event names.
 * @template T The union type of event names
 * @returns An object with on, emit, and off methods
 */
export function createEventEmitter<T extends string>() {
  const listeners: Record<string, ((data: unknown) => void)[]> = {};
  return {
    on(event: T, listener: (data: unknown) => void) {
      listeners[event] = listeners[event] || [];
      listeners[event].push(listener);
    },
    emit(event: T, data: unknown) {
      if (listeners[event]) {
        listeners[event].forEach(listener => listener(data));
      }
    },
    off(event: T, listener: (data: unknown) => void) {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter(l => l !== listener);
      }
    },
  };
}