import { tasksReducer } from '../model/reducers.js';
describe('business logic', () => {
  it('edit task', () => {
    const state=[{id:1,text:'A'}];
    const next=tasksReducer(state,{type:'EDIT_TASK',payload:{id:1,text:'B'}});
    expect(next[0].text).toBe('B');
  });
});
