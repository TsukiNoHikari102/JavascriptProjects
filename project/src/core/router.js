export class Router {
  constructor(routes, outlet, store) {
    this.routes = routes;
    this.outlet = outlet;
    this.store = store;
    window.addEventListener('hashchange', () => this.onRouteChange());
    this.onRouteChange();
  }
  getPath() { return location.hash.slice(1) || '/'; }
  onRouteChange() {
    const path = this.getPath();
    const C = this.routes[path] || this.routes['*'];
    this.current && this.current.unmount();
    this.current = new C({ store: this.store });
    this.current.mount(this.outlet);
  }
}