import { BaseComponent } from '../../core/component.js';
export class TaskForm extends BaseComponent {
  constructor(props) { super(props); }
  afterMount() {
    this.el.querySelector('form')
      .addEventListener('submit', e => {
        e.preventDefault();
        const input = this.el.querySelector('input');
        const text = input.value.trim();
        if (!text) return;
        this.props.store.dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text } });
        input.value = '';
      });
  }
  render() {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input'); input.placeholder = 'Новая задача…'; input.style.padding = '0.5rem';
    const btn = document.createElement('button'); btn.textContent = 'Добавить'; btn.style.marginLeft = '0.5rem';
    form.append(input, btn); div.appendChild(form);
    return div;
  }
}