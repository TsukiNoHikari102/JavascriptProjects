import { jest } from '@jest/globals';
import { createStore, persistStore } from '../core/store.js';
import { tasksReducer } from '../model/reducers.js';

describe('store', () => {
  it('creates store with initial state', () => {
    const store = createStore(tasksReducer, []);
    expect(store.getState()).toEqual([]);
  });

  it('dispatches actions and notifies subscribers', () => {
    const store = createStore(tasksReducer, []);
    const listener = jest.fn();
    store.subscribe(listener);
    store.dispatch({ type: 'ADD_TASK', payload: { id: 1, text: 'X' } });
    expect(listener).toHaveBeenCalled();
  });

  it('persists to localStorage', () => {
    const mock = jest.spyOn(localStorage.__proto__, 'setItem');
    const store = createStore(tasksReducer, []);
    persistStore.save(store.getState());
    expect(mock).toHaveBeenCalledWith('MINI_REDUX_APP', JSON.stringify([]));
    mock.mockRestore();
  });
});