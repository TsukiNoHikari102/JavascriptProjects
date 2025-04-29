import { BaseComponent } from '../../core/component.js';
import { TaskForm } from '../components/TaskForm.js';
import { TaskList } from '../components/TaskList.js';
export class TaskTrackerPage extends BaseComponent {
  render() {
    const container = document.createElement('div');
    const h1 = document.createElement('h1'); h1.textContent = 'Task Tracker';
    container.append(h1);
    new TaskForm({ store: this.props.store }).mount(container);
    new TaskList({ store: this.props.store }).mount(container);
    return container;
  }
}