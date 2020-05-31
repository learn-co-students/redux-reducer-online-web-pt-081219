export function manageFriends(state = { friends: [] }, action) {
    switch (action.type) {
        case 'ADD_FRIEND':
            state.friends.push(action.friend)
            return { friends: state.friends }
        case 'REMOVE_FRIEND':
            const idToRemove = state.friends.findIndex(friend => friend.id === action.id)
            return { friends: [...state.friends.slice(0, idToRemove), ...state.friends.slice(idToRemove + 1)] }

        default:
            return state
    }
}