import React, {useState} from 'react'

const AddTodoForm = ({ dispatch }) => {
    const clearTodo = {
        item: '',
        completed: false,
        id: new Date()
    }
    const [newTodo, setNewTodo] = useState(clearTodo)

    const handleChange = e => {
        setNewTodo({...newTodo, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <input
                name='item'
                value={newTodo.item}
                onChange={handleChange}
            />
            <button onClick={() => {
                dispatch({ type: 'ADD_ITEM', payload: newTodo})
                setNewTodo(clearTodo)
            }}
                >Add Item</button>
        </div>
    )
}

export default AddTodoForm