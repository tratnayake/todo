//Store == object that holds app state
// Can use state with getState()
// updates state using dispatch(action);
// registers listners with subscribe(listener);
// Handles unregistering of listeners with subscribe(listener)

//First createstore

import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)

//IF we want, we can fetch initial app state from second variable
//let store = createStore(todoApp, window.STATE_FROM_SERVER)
