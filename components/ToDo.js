//Import Reach
import React from 'react'
import PropTypes from 'prop-types'

//Rendering the todo
const Todo = ({ onClick, completed, text}) => (
 <li
  onClick = {onClick}
  style = {{
    textDecoration: completed ? 'line-through' : 'none'
  }}
  >
  {text}
 </li
)

//Defining what is required for the component?
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
