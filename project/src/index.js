import { createStore, persistStore } from './core/store.js';
import { combineReducers } from './model/reducers.js';
import { Router } from './core/router.js';
import { AppController } from './controller/appController.js';
import { routes } from './router/routes.js';

// head/meta/runtime setup
const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1';
document.head.appendChild(meta);
document.title = 'MiniReduxApp';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

// load persisted state
const preloaded = persistStore.load();
const rootReducer = combineReducers({ tasks: (state, action) => state }); // placeholder
const store = createStore(rootReducer, preloaded);
// subscribe to persist
store.subscribe(() => persistStore.save(store.getState()));

// app init
document.addEventListener('DOMContentLoaded', () => {
  new AppController({ store, root });
  const router = new Router(routes, root);
  router.store = store;
});