/*
* Action Types
* Remb: Actions are payloads info send data from app to store
* Only source of info for store
* Sent to store using store.dispatch()
*/

//Apparently we define action types as constants

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
* other constants
*/

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


/*
* Action Creators
*/

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisbilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter}
}
