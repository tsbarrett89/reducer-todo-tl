import React from 'react'

const ClearTodos = ({ dispatch }) => {
    return (
        <div>
            <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed Items</button>
        </div>
    )
}

export default ClearTodos