import { BaseComponent } from '../../core/component.js'
import { TaskItem } from './TaskItem.js'

export class TaskList extends BaseComponent {
  constructor(props) {
    super(props)
    this.subscribe = true  // автоматически перерисовать при изменении store
  }

  render() {
    const ul = document.createElement('ul')
    ul.style.listStyle = 'none'
    ul.style.padding = 0

    const tasks = this.props.store.getState().tasks || []
    tasks.forEach(task => {
      new TaskItem({ task, store: this.props.store }).mount(ul)
    })

    return ul
  }
}