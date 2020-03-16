export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return [ ...state, action.payload ]
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return { ...todo, completed: true}
                } else {
                    return todo
                }
            })
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}