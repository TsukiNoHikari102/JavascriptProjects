import { BaseComponent } from '../../core/component.js';
import { TaskItem } from './TaskItem.js';
export class TaskList extends BaseComponent {
  render() {
    const ul = document.createElement('ul'); ul.style.listStyle = 'none';
    const tasks = this.props.store.getState().tasks || [];
    tasks.forEach(t => new TaskItem({ task: t, store: this.props.store }).mount(ul));
    return ul;
  }
}