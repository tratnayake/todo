//Actions are payloads of info that send data from app to store

//Actions must have a type property
// {
//   type: ADD_TODO,
//   text: 'Build my first Redux app'
// }

//Action creators create actions.

function addTodo(text){
  return {
    type: ADD_TODO,
    text
  }
}


//Actions must be dispatched
dispatch(addTodo(text));

//OR you can create a boundaction creator that auto dispatches when invoked
//  arrow function.
//  syntax is functionName = variable = function declaration
//  funcName  = ()  => {}
const boundAddTodo = text => dispatch(addTodo(text))

//Now can call:
boundAddTodo(text);
