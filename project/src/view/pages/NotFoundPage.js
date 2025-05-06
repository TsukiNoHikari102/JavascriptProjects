import { BaseComponent } from '../../core/component.js';
export class NotFoundPage extends BaseComponent {
  render() {
    const d = document.createElement('div');
    d.innerHTML = '<h2>404 — Page Not Found</h2>';
    return d;
  }
}