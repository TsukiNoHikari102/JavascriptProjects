import { jest } from '@jest/globals';
import { TaskForm } from '../view/components/TaskForm.js';

describe('TaskForm', () => {
  let store, form;

  beforeEach(() => {
    store = {
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    form = new TaskForm({ store });
    document.body.innerHTML = '';
    form.mount(document.body);
  });

  it('renders input and button', () => {
    expect(document.querySelector('input')).toBeTruthy();
    expect(document.querySelector('button')).toBeTruthy();
  });

  it('dispatches ADD_TASK on submit', () => {
    const input = document.querySelector('input');
    input.value = 'New Task';
    document.querySelector('form').dispatchEvent(new Event('submit'));
    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({
      type: 'ADD_TASK',
      payload: expect.objectContaining({ text: 'New Task' })
    }));
  });
});