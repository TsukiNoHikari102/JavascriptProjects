import { BaseComponent } from '../../core/component.js'

export class TaskForm extends BaseComponent {
  afterMount() {
    this.el
      .querySelector('form')
      .addEventListener('submit', e => {
        e.preventDefault()
        const input = this.el.querySelector('input')
        const text = input.value.trim()
        if (!text) return
        this.props.store.dispatch({
          type: 'ADD_TASK',
          payload: { id: Date.now(), text }
        })
        input.value = ''
      })
  }

  render() {
    const container = document.createElement('div')
    container.innerHTML = `
      <form style="display:flex;gap:0.5rem;">
        <input placeholder="Новая задача…" style="flex:1;padding:0.5rem">
        <button type="submit" style="padding:0.5rem 1rem">Добавить</button>
      </form>
    `
    return container
  }
}