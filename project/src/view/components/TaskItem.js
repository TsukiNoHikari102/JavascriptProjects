import { BaseComponent } from '../../core/component.js'

export class TaskItem extends BaseComponent {
  constructor(props) {
    super(props)
    this.subscribe = true          // чтобы перерисоваться после dispatch
    this.editMode = false          // локальный флаг «редактируем/просмотр»
    this.editText = ''             // временное хранение нового текста
  }

  afterMount() {
    const btnEdit = this.el.querySelector('.btn-edit')
    const btnSave = this.el.querySelector('.btn-save')
    const btnCancel = this.el.querySelector('.btn-cancel')
    const btnDel = this.el.querySelector('.btn-del')
    const input  = this.el.querySelector('input')

    // ENTER в поле — сохраняем
    input?.addEventListener('keydown', e => {
      if (e.key === 'Enter') btnSave.click()
      if (e.key === 'Escape') btnCancel.click()
    })

    btnEdit?.addEventListener('click', () => {
      this.editMode = true
      this.editText = this.props.task.text
      this.rerender()
    })

    btnCancel?.addEventListener('click', () => {
      this.editMode = false
      this.rerender()
    })

    btnSave?.addEventListener('click', () => {
      const newText = input.value.trim()
      if (newText && newText !== this.props.task.text) {
        this.props.store.dispatch({
          type: 'EDIT_TASK',
          payload: { id: this.props.task.id, text: newText }
        })
      }
      this.editMode = false
      this.rerender()
    })

    btnDel?.addEventListener('click', () => {
      this.props.store.dispatch({
        type: 'REMOVE_TASK',
        payload: this.props.task.id
      })
    })
  }

  render() {
    const { task } = this.props
    const li = document.createElement('li')
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.justifyContent = 'space-between'
    li.style.padding = '0.5rem 0'

    if (this.editMode) {
      // режим редактирования
      li.innerHTML = `
        <input value="${this.editText}" style="flex:1;padding:0.5rem" />
        <button class="btn-save" style="margin-left:0.5rem">Сохранить</button>
        <button class="btn-cancel" style="margin-left:0.25rem">Отмена</button>
      `
    } else {
      // обычный режим
      li.innerHTML = `
        <span style="flex:1">${task.text}</span>
        <button class="btn-edit" style="margin-left:0.5rem">Изменить</button>
        <button class="btn-del" style="margin-left:0.25rem">×</button>
      `
    }

    return li
  }
}