import { Router } from '../core/router.js';
import { jest } from '@jest/globals';

class MockComponent {
  constructor(props) {
    this.props = props;
    this.mounted = false;
  }
  mount(container) {
    this.mounted = true;
    container.appendChild(document.createElement('div'));
  }
  unmount() {
    this.mounted = false;
  }
}

describe('Router', () => {
  let container;
  let routes;
  let store;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = {};
    routes = {
      '/': class extends MockComponent {},
      '/test': class extends MockComponent {},
      '*': class extends MockComponent {}
    };
  });

  afterEach(() => {
    document.body.removeChild(container);
    window.location.hash = '';
  });

  it('renders component for current hash', () => {
    window.location.hash = '#/test';
    const router = new Router(routes, container, store);
    expect(router.current).toBeInstanceOf(routes['/test']);
  });

  it('renders fallback (*) for unknown path', () => {
    window.location.hash = '#/unknown';
    const router = new Router(routes, container, store);
    expect(router.current).toBeInstanceOf(routes['*']);
  });

  it('responds to hashchange', () => {
    window.location.hash = '#/';
    const router = new Router(routes, container, store);
    const spy = jest.spyOn(router, 'onRouteChange');

    window.dispatchEvent(new HashChangeEvent('hashchange'));
    expect(spy).toHaveBeenCalled();
  });
});