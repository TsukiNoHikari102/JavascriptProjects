import { BaseComponent } from '../../core/component.js';
export class NotFoundPage extends BaseComponent {
  render() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2'); h2.textContent = '404 – Page Not Found';
    div.appendChild(h2);
    return div;
  }
}