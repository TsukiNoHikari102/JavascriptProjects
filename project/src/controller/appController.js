export class AppController {
    constructor({ store, root }) {
      this.store = store; this.root = root; this.store.subscribe(() => this.render()); this.render();
    }
    render() {
      this.root.innerHTML = '';
      const outlet = document.createElement('div');
      outlet.id = 'outlet';
      this.root.appendChild(outlet);
    }
  }