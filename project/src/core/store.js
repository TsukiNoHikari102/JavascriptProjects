export function createStore(rootReducer, preloadedState = {}) {
  let state = preloadedState;
  const listeners = new Set();
  function getState() { return state; }
  function dispatch(action) {
    state = rootReducer(state, action);
    listeners.forEach(fn => fn());
    return action;
  }
  function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }
  dispatch({ type: '@@INIT' });
  return { getState, dispatch, subscribe };
}
export const persistStore = {
  key: 'MINI_REDUX_APP',
  load() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
  save(state) { try { localStorage.setItem(this.key, JSON.stringify(state)); } catch {} }
};