// tasksReducer
export function tasksReducer(state = [], action) {
    switch(action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
      case 'REMOVE_TASK':
        return state.filter(t => t.id !== action.payload);
      case 'EDIT_TASK':
        return state.map(t => t.id === action.payload.id ? { ...t, text: action.payload.text } : t);
      default:
        return state;
    }
  }
  
  import { combineReducers as cr } from '../core/store.js';
  export const combineReducers = reducers => {
    return (state = {}, action) => {
      const next = {};
      let changed = false;
      for (const key in reducers) {
        const prev = state[key];
        const nextSlice = reducers[key](prev, action);
        next[key] = nextSlice;
        if (nextSlice !== prev) changed = true;
      }
      return changed ? next : state;
    };
  };