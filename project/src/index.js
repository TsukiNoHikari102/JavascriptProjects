import { createStore, persistStore } from './core/store.js'
import { combineReducers, tasksReducer } from './model/reducers.js'
import { Router } from './core/router.js'
import { AppController } from './controller/appController.js'
import { routes } from './router/routes.js'

document.addEventListener('DOMContentLoaded', () => {
  console.log('🌱 index.js loaded')

  const root = document.createElement('div')
  root.id = 'app'
  document.body.appendChild(root)

  const preloaded = persistStore.load()
  const store = createStore(
    combineReducers({ tasks: tasksReducer }),
    preloaded
  )
  store.subscribe(() => persistStore.save(store.getState()))

  new AppController({ root, store })
  const outlet = document.getElementById('outlet')
  new Router(routes, outlet, store)
})