import { tasksReducer } from '../model/reducers.js';

describe('tasksReducer', () => {
  it('adds a task', () => {
    const task = { id: 1, text: 'Test task' };
    const next = tasksReducer([], { type: 'ADD_TASK', payload: task });
    expect(next).toContainEqual(task);
  });

  it('removes a task by id', () => {
    const state = [{ id: 1, text: 'Test' }];
    const next = tasksReducer(state, { type: 'REMOVE_TASK', payload: 1 });
    expect(next).toEqual([]);
  });

  it('edits a task by id', () => {
    const state = [{ id: 1, text: 'Old' }];
    const next = tasksReducer(state, {
      type: 'EDIT_TASK',
      payload: { id: 1, text: 'New' },
    });
    expect(next[0].text).toBe('New');
  });

  it('returns same state for unknown action', () => {
    const state = [{ id: 1, text: 'Same' }];
    const next = tasksReducer(state, { type: 'UNKNOWN' });
    expect(next).toBe(state);
  });
});