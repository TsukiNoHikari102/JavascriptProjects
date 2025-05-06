import { BaseComponent } from '../../core/component.js';
import { TaskForm } from '../components/TaskForm.js';
import { TaskList } from '../components/TaskList.js';
export class TaskTrackerPage extends BaseComponent {
  render() {
    const c = document.createElement('div');
    c.style.margin='2rem auto'; c.style.maxWidth='600px';
    c.innerHTML='<h1 style="text-align:center;">Task Tracker</h1>';
    new TaskForm({ store: this.props.store }).mount(c);
    new TaskList({ store: this.props.store }).mount(c);
    return c;
  }
}
