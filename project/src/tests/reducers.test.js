import { tasksReducer } from '../model/reducers.js';
describe('tasksReducer', () => {
  it('adds task', () => {
    const next = tasksReducer([], { type:'ADD_TASK', payload:{ id:1,text:'T'} });
    expect(next.length).toBe(1);
  });
  it('removes task', () => {
    const next = tasksReducer([{id:1,text:'T'}], { type:'REMOVE_TASK', payload:1 });
    expect(next).toEqual([]);
  });
});