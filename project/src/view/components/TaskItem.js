import { BaseComponent } from '../../core/component.js';
export class TaskItem extends BaseComponent {
  afterMount() {
    this.el.querySelector('button').addEventListener('click', () => {
      this.props.store.dispatch({ type: 'REMOVE_TASK', payload: this.props.task.id });
    });
  }
  render() {
    const li = document.createElement('li');
    li.style.display = 'flex'; li.style.justifyContent = 'space-between';
    const span = document.createElement('span'); span.textContent = this.props.task.text;
    const btn = document.createElement('button'); btn.textContent = '×'; btn.style.cursor = 'pointer';
    li.append(span, btn);
    return li;
  }
}