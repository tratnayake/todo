//Dependancy from redux
import { createStore } from 'redux'
//Import the app from reducers
import todoApp from './reducers'
//Create the actual store
let store = createStore(todoApp)
