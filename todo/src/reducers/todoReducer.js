export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return [ ...state, action.payload ]
        case "TOGGLE_COMPLETED":
            return [ ...state, action.payload.completed: true ]
        default:
            return state
    }
    return state
}