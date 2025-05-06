import { tasksReducer } from '../model/reducers.js';
describe('businessLogic', () => {
  it('edit task', () => {
    const s=[{id:1,text:'A'}]; const n=tasksReducer(s,{type:'EDIT_TASK',payload:{id:1,text:'B'}});
    expect(n[0].text).toBe('B');
  });
});