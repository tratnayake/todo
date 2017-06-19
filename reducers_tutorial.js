//App state is tored as an object.

//Todo app has two things:
// Currently selected filter, actual list of todos

//Keep the data (list of todos) and UI (visibility filter) seperate

{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

//Reducers handle actions. Pure function (returns new state) that takes previous state + action and returns next state.
(previousState, action) => newState

//Fun Fact: Reducer = "Reducer" because: Array.prototype.reduce(reducer, ?initialValue).

// Things you should NEVER do in reducer.
  // - Mutate arguments (arg1 = arg1 + 1);
  // - Perform side effects (API calls)
  // - Call non-pure function e.g. (Date.now(), or Math.random())


//1. First define initial state
// Redux calls reducer with undefined state on first return


import { VisibilityFilters, ADD_TODO, TOGGLE_TODO } from './actions'

//This is what our app store is like on first run
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

// function todoApp(state, action) {
//   //handle the first run undefined
//   if (typeof state === 'undefined') {
//     return initialState
//   }
//
//   return state
// }

// ABOVE SAME AS BELOW:
function todoApp(state = initialState, action){
  //state = initialState implies that if state is undefined, override it with initialState

  switch(action.type){
    case SET_VISIBILITY_FILTER:
    // If the action is to change the visibility filter, copy the state and change the visibility filter
      return Object.assign({}, state, {
        // Copy all of state object into {}
        visbilityFilter: action.filter
        //change the visibilityFilter element to the filter value of the action. (remb actions have types and values)
      })
    case ADD_TODO:
    // If the action is to add a todo element, copy the state, which means copying all of todos to todos, and then add the item.
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          //Spread the todos currently in app. Expand from array to elements
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        //Copy state into {} and then in that {}
        todos: state.todos.map((todo, index) => {
          //todos equals a map of the state's todos.
          //So for each element`
          if(index === action.index) {
            return Object.assign({}, todo, {
              //for that specific todo. Copy it from the state's to do variable
              completed: !todo.completed
              //change the completed value to its opposite
            })
          }
        })
      })
    //return default when we don't know what to do
    default:
      return state
  }
  return state
}


// Instead of the above, split UI state and app state
//new reducers filter

//Data reducer
function todos(state = [], action){
//This time instead of working with the whole state, we can just work with the todos array
  switch (action.type) {
    case ADD_TODO:
      return [
        //transplant the existing state
        ... state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
    //Get the existing state (array of todos)
      return state.map((todo, index) => {
        //find the todo item that matches the index
        if (index === action.index){
          //Make a copy of that todo, toggle completed
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
      })
    default:
      return state
  }
}

//UI reducerf

function visibilityFilter(state = SHOW_ALL, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// ---Tie the reducers together
function todoApp(state = {}, action){
  return {
    //each reducer handles different parts of the state
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action);
  }
}

// Or the SHORT form of above ^

import { combineReducers } from 'redux'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
