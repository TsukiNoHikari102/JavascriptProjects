export class Router {
    constructor(routes, outlet) {
      this.routes = routes;
      this.outlet = outlet;
      window.addEventListener('hashchange', () => this._onRouteChange());
      this._onRouteChange();
    }
    _getPath() { return location.hash.slice(1) || '/'; }
    _onRouteChange() {
      const path = this._getPath();
      const Component = this.routes[path] || this.routes['*'];
      this.currentComponent && this.currentComponent.unmount();
      this.currentComponent = new Component({ store: this.store });
      this.currentComponent.mount(this.outlet);
    }
  }