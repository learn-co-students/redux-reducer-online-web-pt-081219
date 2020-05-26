export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return {friends: 
                [
                state.friends[0],
                action.friend
                ]
                
            }
        case 'REMOVE_FRIEND':
            let newArray = state.friends.filter(function( obj ) {
                return obj.id !== action.id;
              });
            return {friends:
                newArray
            }
        default:
            return state 
    }
}
