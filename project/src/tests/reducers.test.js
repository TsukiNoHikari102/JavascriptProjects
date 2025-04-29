import { tasksReducer } from '../model/reducers.js';
describe('tasksReducer', () => {
  it('adds a task', () => {
    const next = tasksReducer([], { type: 'ADD_TASK', payload: { id:1, text:'T' } });
    expect(next).toHaveLength(1);
  });
  it('removes a task', () => {
    const next = tasksReducer([{id:1,text:'T'}], { type: 'REMOVE_TASK', payload:1 });
    expect(next).toEqual([]);
  });
});