import React from 'react'

const TodoItem = ({ todo, dispatch }) => {
    console.log(todo)
    return(
        <div>
            <p onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: todo})}>{todo.item}</p>
        </div>
    )
}

export default TodoItem