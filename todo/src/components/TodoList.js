import React, {useReducer} from 'react'

import {todoReducer} from '../reducers/todoReducer'
import TodoItem from './TodoItem'
import AddTodoForm from './AddTodoForm'
import ClearTodos from './ClearTodos'

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, [])

    return(
        <div className='todo-container'>
            <AddTodoForm dispatch={dispatch} />
            {state.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                )
            })}
            <ClearTodos dispatch={dispatch} />
        </div>
    )
}

export default TodoList