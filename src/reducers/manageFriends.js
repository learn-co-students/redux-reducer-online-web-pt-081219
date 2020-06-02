export function manageFriends(state = {friends: []}, action){

    switch (action.type) {
        case 'ADD_FRIEND':
            return (
                {...state,
                friends: [...state.friends, action.friend]}
            )
        case 'REMOVE_FRIEND':
            let unwanted_friend = state.friends.findIndex(x => x.id === action.id)
            return (
                {...state,
                friends: [
                    ...state.friends.slice(0, unwanted_friend), 
                    ...state.friends.slice(unwanted_friend + 1)]}
            )
        default:
            return state 
    }
}
