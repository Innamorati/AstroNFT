const initialState = {
    user: null,
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}
export default UserReducer