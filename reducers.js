//Import dependancy from react for comvining reducer
import { combineReducers } from 'redux'

// import Actions
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const { SHOW_ALL } = VisibilityFilters

//Deal with UI state
function visibilityFilter(state = SHOW_ALL, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

//Deal with app data state
function todos(state = [], action) {
  switch (action.type){
    case ADD_TODO:
      //Take the array of todos as it exists rn
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) =>{
        if (index === action.index){
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

//Long form
export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

//Combine the reducers together
// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })
// export default todoApp
