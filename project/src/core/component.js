export class BaseComponent {
  constructor(props = {}) {
    this.props = props;
    this.el = null;
    this._unsubscribe = null;
  }
  mount(container) {
    if (!this.el) this.el = this.render();
    container.appendChild(this.el);
    if (this.props.store && this.subscribe) {
      this._unsubscribe = this.props.store.subscribe(() => this.rerender());
    }
    this.afterMount && this.afterMount();
  }
  unmount() {
    this._unsubscribe && this._unsubscribe();
    this.el && this.el.remove();
    this.el = null;
  }
  render() { throw new Error('render() must return a DOM element'); }
  rerender() {
    const newEl = this.render()
    this.el.replaceWith(newEl)
    this.el = newEl
    this.afterMount && this.afterMount()
  }
}