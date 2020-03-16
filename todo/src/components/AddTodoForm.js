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

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_ITEM', payload: newTodo})
        setNewTodo(clearTodo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='add-input'
                    name='item'
                    value={newTodo.item}
                    onChange={handleChange}
                />
                <button type='submit' className='add-button'>Add Item</button>
            </form>
        </div>
    )
}

export default AddTodoForm